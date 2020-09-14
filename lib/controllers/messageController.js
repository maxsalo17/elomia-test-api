
Message = require('../models/message')

const mongoose = require('mongoose')

exports.add = (req, res) => {
    var message = new Message();
    message.user = req.body.user || message.user;
    message.text = req.body.text;
    message.time = req.body.time;
    message.save((err) => {
        if (err) {
            res.json(err);
        }
        else {
            res.status(200).send({
                status: "success"
            });
        }
    });
}

exports.getUserMessages = (req, res) => {
    let user = req.params.user

    Message.find({ 'user': user }, (err, message) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        else {
            res.json({
                status: "success",
                data: message
            });
        }
    })
}

exports.getNewUserMessages = (req, res) => {
    let userId = mongoose.Types.ObjectId(req.params.user)
    console.log("Updates for user", userId)
    let pipeline = [{
        $match: {
            "fullDocument.user": userId
        }
    }]
    let watchCursor = Message.watch(pipeline)
    watchCursor.on('change', (message) => {
        console.log("New message", message)
        if (message && message.fullDocument) {
            res.send({
                status: "success",
                data: message.fullDocument
            });
            watchCursor.close();
        }
    });
}