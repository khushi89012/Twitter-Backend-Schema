const mongoose = require('mongoose');


const tweets = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Twiter'},
    tweet: {type: 'String', required: true},
    created_at: {type: 'Date', required: true},
    updated_at: {type: 'Date', required: true}
})


module.exports = mongoose.model('Tweets',tweets)
