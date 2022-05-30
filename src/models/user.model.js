
const mongoose = require('mongoose');

const User_ID = new mongoose.Schema({
   
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'Twiter'},
    follower_id: {type:Number, required: true},
    followed_id : {type:Number, required: true},
    created_at: {type: 'Date', required: true},
    updated_at: {type: 'Date', required: true}

})


module.exports = mongoose.model('User_ID',User_ID)