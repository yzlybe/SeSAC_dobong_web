const express = require("express");
const http = require("http");
// const socketIO = require("socket.io");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const socketHandler = require("./sockets");
socketHandler(server);

// const io = socketIO(server, {
//   cors: {
//     origin: "http://localhost:3000", // react server와 통신하기 위함
//   },
// }); //+ >> sockets/index로 넘겨줌

const cors = require("cors");
app.use(cors());

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
