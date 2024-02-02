const express = require("express");
const app = express();
const PORT = 3000;
const multer = require("multer");
const path = require("path");

// ### 미들웨어
// view 관련
app.set("view engine", "ejs");
app.set("views", "./views");
// static 폴더 설정
app.use("/uploads", express.static(__dirname + "/uploads")); //+ 어떤 이름으로 어떤 경로에 있는 폴더를 사용할건지
app.use("/static", express.static(__dirname + "/public")); //+ static은 여러개 사용할 수 있다
// app.use('/이 이름으로 사용할 것', express.static(실제 폴더 경로))
// console.log("현재 위치한 폴더의 경로", __dirname); //+ app.js가 어디에 있는지

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// multer
const upload = multer({
  dest: "uploads/", //+ 추가 설정 없이 dest만 설정하면 무작위 이름으로 확장자 없이 저장되어 파일을 바로 읽을 수가 없다
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); //+ path도 설치는 안해도 되지만 모듈이라 위에서 불러줘야 쓸 수 있다
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //+ byte단위이기 때문에 *KB *MB *GB...가 된다
});
/* 
multer 디테일 설정
- storage: 저장공간에 정보
    diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
    - destination: 저장 경로
    - filename: 파일 이름 관련 정보 
- limits: 파일 제한 관련 정보
    - fileSize: 파일 사이즈를 바이트 단위로 제한
*/

// 라우팅
app.get("/", (req, res) => {
  res.render("index");
});

// app.post("/upload", upload.single("userfile"), function (req, res) {
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  /* 
  {
  fieldname: 'userfile', // 폼에 정의한 name 값
  originalname: 'pooh.png', // 원본 파일명
  encoding: '7bit', // file encoding type
  mimetype: 'image/png', // 파일 타입
  destination: 'uploads/', // 파일 저장 경로
  filename: '85056067481b215e2bd8a0027845dd31', // 저장된 파일 이름
  path: 'uploads\\85056067481b215e2bd8a0027845dd31', // 경로 포함된 파일 이름
  size: 718119 // byte 기준 파일 크기
}
  */
  res.send("파일 업로드 완료");
});

app.post(
  "/uploads/array",
  uploadDetail.array("multifiles"),
  function (req, res) {
    console.log(req.files); // [{..},{}] 배열로 요청됨, 파일을 하나만 업로드 해도 배열
    console.log(req.body); // 파일 외의 정보
    res.send("파일 업로드 완료");
  }
);

app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  function (req, res) {
    console.log(req.files);
    console.log(req.files.file1[0].originalname);
    /* 
    {file1:[{},{}], file2:[{}], name속성:[{},{}, ...]}
    */
    console.log(req.body);
    res.send("업로드 완료");
  }
);

// 동적 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //   res.send({...req.file, ...req.body});
  // res.send(req.file);
  res.send({ title: req.body, fileInfo: req.file });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
  console.log(`http://localhost:${PORT}`);
});
