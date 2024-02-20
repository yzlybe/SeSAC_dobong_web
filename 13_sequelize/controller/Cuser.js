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

/*
// 실습 해답

// TODO: 컨트롤러 코드
// const models = require("../models/index");
const models = require("../models");

//+ main부분 필요 X. Cvisitor에서 이미 설정했기 때문

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
    console.log("회원가입 요청", result);
    // /.*
    User {
  dataValues: { id: 9, userid: 'abcd', name: 'abcd', pw: 'abcd' },
  _previousDataValues: { userid: 'abcd', name: 'abcd', pw: 'abcd', id: 9 },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: true,
    _schema: null,
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
} *./
    console.log(result.id);
    res.end();
  });
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  console.log("controller", req.body); // {userid, pw}
  //   User.post_signin(req.body, (result) => {
  //     console.log("controller", result);
  //     // 로그인 성공시, true를 뷰로 전달
  //     // 로그인 실패시, false를 뷰로 전달

  //     if (result.length > 0) {
  //       // res.send({isLogin:true, userInfo:result[0]});
  //       res.send(true);
  //     } else {
  //       res.send(false);
  //     }
  //   });

  // [sequelize 적용]
  // sql = `SELECT * FROM user
  //   WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`;
  // find One은 LIMIT 없어도 ok
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
    // {} or null
  }).then((result) => {
    // result: findOne을 이용해서 찾은 결과를 반환 or 데이터를 못찾았다면 null 반환 //!+ null값은 if문에서 false로 넘어간다
    console.log("로그인 요청", result);
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
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

  // [sequelize 적용]
  // sql = `SELECT * FROM user WHERE userid='${id}' LIMIT 1`;
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("프로필 페이지 요청", result);
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

  // [sequelize 적용]
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
    console.log("회원 정보 수정", result);
    // [1], [0]
    // 수정 성공, 수정 실패
    // where 조건에 해당하는 레코드를 못찾았을 때 실패
    res.end();
  });
};

// POST /user/profile/delete
// 회원 정보 삭제
exports.delete_profile = (req, res) => {
  console.log("controller", req.body);
  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });

  // [sequelize 적용]
  // sql = `DELETE FROM user WHERE id = '${id}'`;
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("회원 정보 삭제", result);
    // 1: 삭제 성공
    // 0: 삭제 실패
    res.end();
  });
};
*/
