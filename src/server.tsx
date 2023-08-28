import express from 'express';
import mysql from 'mysql2';

const app = express();

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Express 서버 라우트 및 미들웨어 설정
app.get('/', (req, res) => {
  res.send('Hello Express & MySQL!');
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});