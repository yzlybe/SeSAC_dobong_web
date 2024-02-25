const express = require("express");
const app = express();
const router = require("./routes");
const db = require("./models");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션 설정
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
      httpOnly: true,
    },
  })
);

// 라우터
app.use("/", router);

// 404
app.get("*", (req, res) => {
  res.render("404");
});

// 시퀄라이즈
db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
