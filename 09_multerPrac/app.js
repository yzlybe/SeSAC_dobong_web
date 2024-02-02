const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// /*
const upload = multer({
  dest: "uploads/", //+ dest는 해당 폴더를 만들어준다
});
const uplaodDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/"); //+ destination은 폴더를 만들어주지 않기 때문에 따로 만들어야함
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(null, path.basename(req.body.userId, extension) + extension);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", uplaodDetail.single("profile"), function (req, res) {
  res.render("result.ejs", {
    userInfo: req.body,
    userProfile: req.file.path,
  });
});
// */

/*
// 해답
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", uplaodDetail.single("profile"), function (req, res) {
  res.render("result", {
    src: req.file.path,
    userInfo: req.body,
  });
});

*/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
