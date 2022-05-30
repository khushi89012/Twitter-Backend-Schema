
const mongoose = require('mongoose');

const TwiterSchema = new mongoose.Schema({
    email: {type: 'String', required: true},
    password: {type: 'String', required: true},
    id: {type: 'String', required: true},
    remember_token: {type: 'String', required: true},
    created_at: {type: 'Date', required: true},
    updated_at: {type: 'Date', required: true},
    deleted_at: {type: 'Date', required: true},
    name: {type: 'String', required: true},
    image: {type: 'String', required: false},
  
   
})

module.exports  = mongoose.model('Twiter',TwiterSchema)
