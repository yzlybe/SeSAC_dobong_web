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

const upload = multer({
  dest: "uploads/",
});
const uplaodDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
