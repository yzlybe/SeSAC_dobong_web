//+ env는 js에서만 사용 가능, json에선 사용 불가. 따라서 config.js로 다시 만들어야 함

// env 사용 설정
require("dotenv").config();
//+ 보통 아래처럼 사용하지만 지금 잠깐 쓸 거니까 이런 식으로 쓸 수 있다
// const dotenv = require("dotenv");
// dotenv.config;

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "sesac",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development };
