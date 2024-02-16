// TODO: DB(mysql) 연결
// TODO: 모델 코드

// 0. mysql 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

/* 
1. 뷰에서 요청
2. 컨트롤러에서 정보를 받고 모델로 줌(req.body, req.query, req.params, ...)
3. 모델에서 DB로 요청
4. 모델에서 데이터 삽입/삭제/조회/... 결과값을 컨트롤러로 응답
5. 컨트롤러에서는 res 객체를 통해 뷰로 응답

뷰> 컨> 모> DB> 모> 컨> 뷰
*/
// POST /user/signup
// 특정 회원정보 "등록"
exports.post_signup = (data, cb) => {
  console.log("model", data); //{userid, pw, name}

  const sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("rows", rows);

    cb();
  });
};

// POST /user/signin
// 특정 회원정보 "조회"
exports.post_signin = (data, cb) => {
  console.log("model", data); //{userid, pw}
  const sql = `SELECT * FROM user
    WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`;
  // LIMIT 1 걸어주는 이유 : 회원가입 시 중복id검사를 하지않아서 select의 결과가 여러개일 수 있기 때문

  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows); // [{id, userid, name, pw}] // [] //+ 회원가입 실패 시 빈 배열이 올 수도 있다.
    cb(rows);
  });
};

// POST /user/profile
// 특정 회원 정보 "조회"
exports.post_profile = (id, cb) => {
  console.log("model userId", id); // id='allie'
  const sql = `SELECT * FROM user WHERE userid='${id}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("model", rows); // [{id, userid, name, pw}] //+ 로그인 성공 때만 들어오기 때문에 무조건 값이 존재한다
    cb(rows[0]);
  });
};

// POST /user/profile/edit
// 특정 회원 정보 "수정"
exports.edit_profile = (data, cb) => {
  console.log("model", data); // {id, name, pw}
  const sql = `UPDATE user
  SET name = '${data.name}', pw = '${data.pw}'
  WHERE id = '${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("model rows", rows);
    cb();
  });
};

// POST /user/profile/delete
// 특정 회원 정보 "삭제"
exports.delete_profile = (id, cb) => {
  console.log("model", id);
  const sql = `DELETE FROM user WHERE id = '${id}'`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    cb();
  });
};
