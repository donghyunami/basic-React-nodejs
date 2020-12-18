// 변경사항 없음
const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://donghyun:asdf12@cluster0.ufgsz.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err)); // 몽고DB가 잘 연결됬는지 확인용 

 

app.get('/', (req, res) => {
    res.send('Hello World! 안녕하세요!')
})

app.listen(port, () => {
    console.log(`Expample app listening on port ${port}`)
})