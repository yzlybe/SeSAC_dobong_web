const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const serverInfo = User.userInfo();
  console.log(serverInfo);
  console.log(req.body);
  // console.log("server: " + serverInfo);
  console.log("server: " + JSON.stringify(serverInfo));
  // console.log(`client: ${req.body}`);
  console.log("client:", req.body); //!! 문자열 연결할 때 +도 백틱도 안돼서 stringify도 써보고 했는데 그냥 , 썼으면 해결될 문제였다.. 왜 하필 ,만 안써봐서.
  const { id: clientId, pw: clientPw } = req.body;
  if (clientId === serverInfo.id && clientPw === serverInfo.pw) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};

exports.login2 = (req, res) => {
  const usersInfo = User.user;
  const usersSplit = usersInfo.split("\n"); // ['apple//1234//사과사과', ...]
  let userSplit;
  for (i = 0; i < usersSplit.length; i++) {
    userSplit = usersSplit[i].split("//"); // ['id', 'pw', 'name']
    console.log("server:", userSplit[0], userSplit[1], userSplit[2]);
    console.log("client:", req.body);
    const { id: clientId, pw: clientPw } = req.body;
    if (clientId === userSplit[0] && clientPw === userSplit[1]) {
      userResult = true;
      break;
    }
  }
  if (userResult) {
    res.send({
      userInfo: req.body,
      name: userSplit[2],
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
