const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const serverInfo = User.userInfo();
  console.log(serverInfo);
  console.log(req.body);
  const { id: cliendtId, pw: clientPw } = req.body;
  if (cliendtId === serverInfo.id && clientPw === serverInfo.pw) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
