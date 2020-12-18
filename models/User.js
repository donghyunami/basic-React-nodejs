const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ // Schema 생성
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String, //trim 공백제거
        trim: true,
        unique: 1    
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})


const User = mongoose.model('User', userSchema); //model 생성

module.exports = {User}