// TODO: 컨트롤러 코드
// const User = require("../models/User");
const models = require("../models");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};
// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};
// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
  console.log("controller", req.body); //{userid, pw, name}
  // User.post_signup(req.body, () => {
  //   res.end();
  // });
  // sql = `INSERT INTO user(userid, name, pw)
  // VALUES('${data.userid}','${data.name}','${data.pw}')`;
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 등록", result);
    res.send(result);
  });
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  console.log("controller", req.body); // {userid, pw}
  // User.post_signin(req.body, (result) => {
  //   console.log("controller", result);
  //   if (result.length > 0) {
  //     // 로그인 성공 시, true
  //     res.send(true);
  //   } else {
  //     // 로그인 실패 시, false
  //     res.send(false);
  //   }
  // });
  // sql = `SELECT * FROM user
  //   WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`;
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log("로그인", result);
    res.send(result);
  });
};

// POST /user/profile
// 프로필 페이지 요청
exports.post_profile = (req, res) => {
  console.log("req.body", req.body); // {userId}
  // User.post_profile(req.body.userid, (result) => {
  //   console.log(result); // {id, userid, name, pw}
  //   res.render("profile", { data: result });
  // });
  // sql = `SELECT * FROM user WHERE userid='${id}' LIMIT 1`;
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("프로필", result);
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = (req, res) => {
  console.log("controller", req.body);
  // User.edit_profile(req.body, () => {
  //   res.end();
  // });
  // sql = `UPDATE user
  // SET name = '${data.name}', pw = '${data.pw}'
  // WHERE id = '${data.id}'`;
  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    console.log("수정", result);
    res.send(result);
  });
};

// POST /user/profile/delete
// 회원 정보 삭제
exports.delete_profile = (req, res) => {
  console.log("controller", req.body);
  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });
  // sql = `DELETE FROM user WHERE id = '${id}'`;
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("삭제", result);
    res.end();
  });
};
