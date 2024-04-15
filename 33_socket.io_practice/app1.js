const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");
const server = http.createServer(app);

const io = socketIO(server);
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("practice1");
});

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  socket.on("hello", (msg, cb) => {
    console.log("client:", msg);
    cb("안녕하세요.");
  });
  socket.on("study", (msg, cb) => {
    console.log("client:", msg);
    cb("공부합시다!");
  });
  socket.on("bye", (msg, cb) => {
    console.log("client:", msg);
    cb("잘가~");
  });
});

// 실습 풀이
// // socket.io 코드 작성
// io.on("connection", (socket) => {
//   console.log(socket.id, "연결되었습니다.");
//   // socket.on("hello", (message, cb) => {
//   //   console.log("client:", message);
//   //   cb("안녕하세요.");
//   // });
//   socket.on("hello", (message) => {
//     console.log("client:", message);
//     socket.emit("hello2", "안녕하세요.");
//   });
//   socket.on("study", (message, cb) => {
//     console.log("client:", message);
//     cb("공부합시다.");
//   });
//   socket.on("bye", (message, cb) => {
//     console.log("client:", message);
//     cb("잘가~");
//   });
// });

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
