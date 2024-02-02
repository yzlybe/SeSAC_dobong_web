const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8080;

/* temp DB
   임시 데이터 배열형태로 만들어서 화면에 띄워주는 작업
   //+ 아직 데이터베이스는 안배워서 임시로 사용
*/

let tempDB = [
  {
    contentID: 1,
    title: "글 제목1",
    content: "글 내용1",
    img: null, // null or path(string)
  },
  {
    contentID: 2,
    title: "글 제목2",
    content: "express, ejs, multer 복습을 해보아요",
    img: null, // null or path(string)
  },
  {
    contentID: 3,
    title: "글 제목3",
    content: "백엔드가 많이 어렵죠? 우리 모두 힘내봐요",
    img: null, // null or path(string)
  },
  {
    contentID: 4,
    title: "글 제목4",
    content: "글 내용4",
    img: null, // null or path(string)
  },
];

const userID = "YZ";

// 미들웨어 설정
/* 
    미들웨어란?
    요청(request)과 응답(response) 사이에서 중간 다리 역할을 하는 SW
    ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
    ex2) request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
    ex3) static 파일 설정을 도와주는 app.use(express.static(~~))
*/

/* 미들웨어1. views 설정(set() 이용)
- view란?
  사람들 눈에 보이는 화면, 프론트단 html
  view 설정
  1. html 파일을 어디서 모아둘건데(views 폴더 설정)
  2. html 을 보여주기 위해서 어떻게 할 건지 (view engine)
- view engine (ejs)
  서버에서 보낸 js 변수를 클라이언트 사용할 수 있도록 도움
  pug, ejs, nunjucks, ... 등이 있지만 html과 가장 유사한 것은 ejs
*/
app.set("view engine", "ejs");
app.set("views", "./views");

/* 
    미들웨어2. static 폴더 설정
    - static 폴더란?
    외부(브라우저 등의 client)에서 접근 가능한 폴더
    프론트 js, css, 이미지, 동영상...
*/
app.use("/static", express.static(__dirname + "/public")); //+ 가상경로 등록
app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use(express.static("/uploads")); //+ 이런 식으로 생략하고 쓸 수도 있다 //+ 그냥 얘로 접근하겠다 //+ 오류나서 일단 가상경로 등록으로 하라고.

/* 
    미들웨어3. body-parser 설정 (express 내장 모듈)
    - req.body 기본적으로 undefined
    body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing)해줌 //+ parse는 데이터를 내가 원하는 형태로 만들어주는 것. ex) json & stringify
*/

// true : queryString 모듈 사용, false: qs 모듈 사용 //+ 비슷한데 qs쪽이 보완적으로 성는이 추가되어 있다
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 요청 body 에서 json 정보만 가지고 오도록

/* 
    미들웨어4. multer 설정 (npm install multer, 설치 필요)
    - req.body input type="file" 의 정보는 string
      실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용
*/
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      /* 
            extname(파일명): 확장자 추출
            basename(파일명, 확장자): 확장자를 제외한 파일명 추출
            basename(경로명): (확장자 포함된) 파일명 추출
        */
      const ext = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, ext) +
          Date.now(/*+ 1970년 1월 1일 0시 0분 0초 부터의 밀리초*/) +
          ext
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ###라우팅
/* 
    특정 url로 특정 method에 대한 요청 처리
    - url: 사용자가 정한 url
    - method: get, post, put, patch, delete
      CRUD를 위한것(CRUD: 데이터를 creat, read, update, delete)
      1. get: 'R'ead, localhost:8080/sesac
      브라우저의 url에 주소를 입력하는 것은 모두 get 요청
      localhost:8080/sesac 의 화면을 보기 위해서는
      /sesac의 get 요청에 대한 응답(response)이 있어야 볼 수 있다
      res.send() res.end() res.write() res.render(), ...

      2. post: 'C'reate 새로운 정보를 '입력' '추가'할 때
      3. put & patch: 'U'pdate
        수정 관련 메소드 //+ put은 전체, patch는 일부. post로도 수정할 수 있다
      4. delete: 삭제
*/
app.get("/", function (req, res) {
  res.render("index", {
    user: userID,
    contentData: tempDB, // [{},{},{},{}]
  });
});

// http//blog/[아이디 정보]/[글 정보]
// /:id/:content 에 대한 get 요청

/* 
    params vs query
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청 시 /123
        - req.params 에서 정보 확인 가능 {params:'123'}
        - 네이버 블로그처럼 여러 계정의 글을 "조회"할 때 == params
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=123&content=123
        - req.query 에서 정보 확인 가능 {id:'123', content:'123'}
        - 검색, 필터링 기능 == query
*/
app.get("/content/:contentID", (req, res) => {
  //+ 새로 배우는 것: ' : ' 파라미터. 일일히 1~4까지 라우팅을 걸어주기엔 비효율적이다
  console.log(req.params); // { contentID: '1' }
  //   req.params.contentID
  const { contentID } = req.params;

  // tempDB의 contentID와 params로 들어오는 contentID 비교
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0]; //+ ID가 겹치지 않기 때문에 하나만 들어있을 거라 [0]으로 지정 가능 //+? 오브젝트의 conID랑 params의 conID가 같다면
  console.log(isContent); // {}, undefined

  /* 
  {
    contentID: 1,
    title: "글 제목1",
    content: "글 내용1",
    img: null,
  }
  */

  if (isContent) {
    res.render("content", isContent);
    // res.render("content", {
    //   ...isContent,
    //   userName: "YZ",
    // });
  } else {
    res.render("404");
  }
});

// 새 글 작성하기 화면 렌더링
// /content/write 는 write를 params로 파악할 수 있으니 쓰지않음
app.get("/write", function (req, res) {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log("req", req.body);
  console.log("file", req.file);
  tempDB.push({
    // contentID: tempDB.length + 1, //+ 이렇게 하면 간단하지만 데이터를 삭제했을 때 문제가 된다.
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null, //+ req에 file이 있으면 path를 넣고 없으면 null을 넣어주세요
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);
  //   res.send("111");
  res.end();
});

app.get("*", (req, res) => {
  res.render("404"); //+ 404는 맨 마지막에 쓰기
});

// ###포트열기
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
