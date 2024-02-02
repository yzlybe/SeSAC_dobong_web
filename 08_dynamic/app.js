const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false })); //+ 미들웨어를 설정하지 않으면 post부분의 body를 읽을 수 없어서 undefined가 나온다.
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("ajax 응답완료");
  //   res.send({
  //     name: req.query.name,
  //     gender: req.query.gender,
  //   });
  res.send(req.query); //+ 위랑 같다
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// open api 사용
app.get("/open-api", function (req, res) {
  res.render("api");
});

// 실습1
app.get("/practice1", function (req, res) {
  res.render("practice1");
});

app.get("/practiceReg", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 실습2
const id = "qwer";
const pw = "1234";

app.get("/practice2", function (req, res) {
  res.render("practice2");
});

app.post("/practiceLogin", function (req, res) {
  if (req.body.id == id && req.body.pw == pw) {
    res.send("success");
  } else {
    res.send("fail");
  }
});

// 해답
/*
const id = "pororo";
const pw = "1234";

app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice2");
});

app.get("/axios-practice1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios-practice2", (req, res) => {
  console.log(req.body);
  // 서버의 계정 정보와, 클라이언트의 계정 정보가 일치하는 지
  const { id: cliendtId, password: clientPw } = req.body;
  if (cliendtId === id && clientPw === pw) {
    res.send({
      userInfo: req.body,
      // ...req.body, //+? 또는 req.body를 이렇게 보낼 수도 있다. 하나의 객체에 userInfo와 isSuccess값이 같이 담겨서 온다. 테스트 해보세요
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
  res.send(req.body);
});
*/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
