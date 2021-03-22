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
    } else {
        next(); //비밀번호 변경이 아니면, 다음 단계진행
    }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {

    //plainPassword 12345  || 암호화된 $2b$10$wssy7.NcYHDNftI2.C7qFOdbp8RZKnyzhs7wBwa8WP2AJo6iPLt12
    bcrypt.compare(plainPassword, this.password, function (err, isMathch) {
        if (err) return cb(err),
            cb(null, isMathch)
    })
}

const User = mongoose.model('User', userSchema); //model 생성
module.exports = { User }