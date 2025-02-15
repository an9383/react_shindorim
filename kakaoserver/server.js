// server.js문서 노드서버 kakaoserver핵심
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// 서버사용하기 위한 서버명명
const app = express();

// 서버포트
const PORT = process.env.PORT || 5000;
app.use(cors()); // CORS를 활성화
app.use(bodyParser.json()); // JSON 형태로 된 body를 받기 위해 body-parser를 사용

// MySQL DB 연결
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // MySQL DB 비밀번호
  port: 3306, // MySQL DB 포트번호 (기본 3306)
  database: 'naver', // MySQL DB 이름
});

// 접속
app.listen(PORT, () => {
  console.log(`Server OK : http://localhost:${PORT}`);
});

db.connect((error) => {
  if (!error) {
    console.log('db접속 성공 2-15 1:12');
  }
  else {
    console.log('db접속 실패 2-15 1:12');
  } 
});