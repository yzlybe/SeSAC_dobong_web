const User = require("../model/User");
// User.userInfo(); // {id:~, pw:~}

exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
