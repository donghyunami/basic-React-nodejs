// 변경사항 없음
const express = require('express');
const app = express();
const port = 5000;

//클라이언트에서 전송된 데이터 저장하기 위해
//데이터베이스 가져오기
const { User } = require('./models/User');

app.use(express.urlencoded({ extended: true }));
//application/x-222-form-urlencoded 분석
app.use(express.json());
//application/json 분석

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://donghyun:asdf12@cluster0.ufgsz.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err)); // 몽고DB가 잘 연결됬는지 확인용

//초기 라우팅 설정
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!');
});

//회원가입 관련 라우팅 설정
app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 클라이언트에서
  // 가져오면 그것을 데이터베이스에 넣어준다.
  const user = new User(req.body);

  // User model에 저장
  user.save((err, doc) => {
    if (err) return res.json({ success: false }, err);
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Expample app listening on port ${port}`);
});
