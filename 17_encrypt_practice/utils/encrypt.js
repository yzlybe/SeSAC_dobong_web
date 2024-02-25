// 여러 군데서 사용하는 함수는 utils에서 관리하기

// bcrypt 암호화 설정
const bcrypt = require("bcrypt");

const saltRounds = 10;

// 회원가입 >> 해시값 생성
function hashPW(pw) {
  // hashSync(비밀번호, 솔트라운드)
  return bcrypt.hashSync(pw, saltRounds);
}

// 로그인 >> 해시값 일치 확인
function comparePW(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw);
}

module.exports = { hashPW, comparePW };
