// [DB 연결 전]
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//     { id: 3, name: "가나다", comment: "1234" },
//   ];
// };

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  /*   user: "root", //+ node.js에서 root로 바로 접근할 수 없다. > 새로운 사용자를 만들고 권한을 줘야 함.
  password: "yj0025yzisiz", */
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// 전체 데이터 조회
// GET /visitors
exports.getVisitors = (cb /*+ sql연결하면 반드시 인자가 들어가야한다 */) => {
  conn.query(/* sql문 */ "SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js 전체목록::", rows);

    cb(rows);
  });
};

exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 데이터 하나 조회", rows); // [{}]

    // 하나의 데이터를 찾아도 배열 형태로 넘어옴 //+ > 0번 인덱스로 정리
    cb(rows[0]);
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  // data = {name:'asdf', comment:'asdasdf'}
  conn.query(
    `INSERT INTO visitor VALUE(null, '${data.name}', '${data.comment}')`, //+ data 관련이 문자열로 들어오는 중이라 문자열 처리를 해줘야함
    (err, rows) => {
      if (err) throw err;
      console.log("visitor.js post", rows);
      /* rows = OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 5,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
      }*/
      cb(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;

    console.log("visitor.js delete", rows);
    cb(rows);
  });
};

exports.patchVisitor = (data, cb) => {
  console.log(data);
  conn.query(
    `UPDATE visitor 
    SET name='${data.name}', comment='${data.comment}' 
    WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;

      console.log("Visitor.js patch, rows");
      cb(true); //+ 굳이 rows를 전달 안해도 될 상황
    }
  );
};
