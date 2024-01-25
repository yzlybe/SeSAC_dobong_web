const http = require("http");
const fs = require("fs"); //+ 모듈을 사용해서 html 형식을 읽게 해줌

const PORT = 8080;
const server = http.createServer(function (request, response) {
  //+ req, res 로 줄여쓸 수 있음
  // console.log(request.url) //+ 서버에 들어가는 것 자체가 응답요청
  const data = fs.readFileSync("./index.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" }); //+ 200은 상태코드 //+ 텍스트를 html로 보낼거니까 h3태그 html로 처리해줘, 한글로 보낼거니까 텍스트 처리해줘
  /* response,writeHead(상태코드, 헤더정보)
        - text/html: 응답의 콘텐트 형식이 HTML 이라는 의미
        - 인코딩 방식이 utf-8
    */
  response.write(data);
  response.end();
  // response.write('응답완료!')
  // response.end('<h3>진짜 완료!</h3>') //+ end를 안달아주면 무한로딩 당함

  /* 
  예외처리 try{ ~ }catch(err){} 문
  try 스코프 내부 문장에서 오류가 났을 때 catch 문으로 err를 보냄
  */
  try {
    const data = fs.readFileSync("./inx.html"); //+ 링크 주소가 틀렸다
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    /* response,writeHead(상태코드, 헤더정보)
          - text/html: 응답의 콘텐트 형식이 HTML 이라는 의미
          - 인코딩 방식이 utf-8
      */
    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    const data = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } finally {
    // 예외 발생과 상관없이 모두 실행시키고 싶은 경우 작성
    console.log("성공 실패 모두 실행됩니다.");
  }
});

// 1. request 이벤트: 클라이언트 요청
server.on("request", function () {
  //+ req 이벤트가 들어오면 funtion을 실행한다
  console.log("request 이벤트 실행!");
});

// 2. connection 이벤트 : 클라이언트 접속했을 때 발생
server.on("connection", (req, res) => {
  console.log("connection 이벤트 발생");
});

server.listen(PORT, function () {
  //+ 숫자는 아무거나 하고싶은 숫자 가능
  console.log("server is open!");
  console.log(`http://localhost:${PORT}`);
});

//+ 서버에서는 새로고침 한다고 갱신이 되지 않는다. 서버를 껐다켜줘야 함. ctrl+C로 서버 종료.
//+ favicon: 탭의 사이트 이름 앞에 뜨는 아이콘
//+ front단(index.html 파일)은 변경해도 새로고침하면 바로 반영 가능. 서버쪽은 껐다켜야만 반영된다.
