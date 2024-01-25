const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); //+ view 엔진을 ejs로 쓸 것이다
app.set("views", "./views"); //+ views를 폴더 경로로 변경한다
app.use("/static", express.static(__dirname + "/public")); //+ 상대경로로 들어갈 필요 없이 그냥 퍼블릭 쓰면 됨
// 이 세 가지를 넣으면 html처럼 사용할 수 있다

app.get("/", (request, response) => {
  //   response.send("hello express! 안녕하세요 익스프레스");
  response.render("index.ejs", {
    //+ 얘로 들어왔을 때 index.ejs를 렌더시켜주세요
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "식사는 맛있게 하셨나요?",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// page not found, 404 페이지는 라우팅 맨 마지막에 설정
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
