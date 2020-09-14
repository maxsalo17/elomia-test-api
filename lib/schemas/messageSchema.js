var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = messageSchema;