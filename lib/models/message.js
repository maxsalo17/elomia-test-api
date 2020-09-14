var mongoose = require('mongoose');
var messageSchema = require('../schemas/messageSchema')

var Message = module.exports = mongoose.model('message', messageSchema)

module.exports.get = (callback, limit) => Message.find(callback).limit(limit)