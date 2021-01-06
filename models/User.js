const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

//user모델에 저장하기전 암호화
userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        // Salt를 사용해서 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    };
});

const User = mongoose.model('User', userSchema); //model 생성

module.exports = { User }