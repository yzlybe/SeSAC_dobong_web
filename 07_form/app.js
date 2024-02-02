const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //+ true 든 false든 정보는 잘 들어오는데 차이는 각각 사용하는 모듈이 다르게 된다
app.use(express.json()); //json 형식으로 데이터를 주고받음

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query, // req.query: {id:'', email:'', pw:''}인 객체
  });
  // res.render('뷰', {보내줄 데이터})
});

app.post("/postForm", function (req, res) {
  // post 요청은 request.body에 담겨져 옵니다
  console.log(req.body);
  //   res.send("포스트 요청 성공!");
  //   res.send(`
  //   <ul>
  //     <li>${req.body.id2}</li>
  //     <li>${req.body.pw2}</li>
  //   </ul>
  //   `);
  console.log("안녕하세요");
  res.render("result.ejs", {
    title: "POST",
    userInfo: req.body, // {id:'', pw:'', agree:[]}
  });
}); //+ 그냥 쓰면 undefined가 나온다. body-parser를 세팅해서 중간다리를 만들어줘야 함

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });

// 실습

// app.get("/", function (req, res) {
//   res.render("practice1");
// });

// // app.get("/getForm", function (req, res) {
// //   console.log(req.query);
// //   res.render("result", {
// //     title: "GET",
// //     userInfo: req.query,
// //   });
// // });

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });

// 실습 해답
/* 
 /practice1
 /practice2
*/
// /*
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

app.get("/practice", (req, res) => {
  console.log(req.query);
  res.render("practice/result.ejs", {
    userInfo: req.query,
    addInfo: false,
  });
});

//+ 메소드가 get과 post가 다르다면 url이 같아도 상관없다
app.post("/practice", (req, res) => {
  console.log(req.body);
  const postInfo = req.body;
  res.render("practice/result.ejs", {
    userInfo: postInfo,
    addInfo: true,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
// */
