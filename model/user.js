const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type:String,
        required: true
    },
    visitHistory : [{timestamp:  {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
},{timestamps: true})

const User = mongoose.model('user',userSchema);

module.exports = User;