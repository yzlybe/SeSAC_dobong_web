const { response } = require("express");
const models = require("../models");
const encrypt = require("../utils/encrypt");

// 렌더링

// 메인 페이지
exports.main = (req, res) => {
  const user = req.session.user;
  // console.log("유저 정보: ", user);
  if (user) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
};
// 로그인 페이지
exports.loginPage = (req, res) => {
  res.render("login");
};

// 회원가입 페이지
exports.registerPage = (req, res) => {
  res.render("register");
};

// 프로필 페이지
exports.profilePage = (req, res) => {
  const user = req.session.user;
  models.User.findOne({ where: { userid: user } }).then((result) => {
    // console.log("result", result);
    res.render("profile", { data: result });
  });
};

// 요청

// 회원가입
exports.register = async (req, res) => {
  console.log("controller", req.body.pw); //{userid, pw, name}
  // models.User.findOne({
  //   where: { userid: req.body.userid },
  // }).then(() => {
  //   console.log(idchecked);
  //   res.end();
  // });
  // if (idchecked.length > 0) {
  //   console.log("not ok");
  //   res.send(`<script>alert('이미 사용중인 ID입니다.');</script>`);
  // } else {
  //   console.log("ok");
  //   res.end();
  // }
  try {
    const hashedPw = encrypt.hashPW(req.body.pw);
    console.log(hashedPw);
    const reg = await models.User.create({
      pw: hashedPw,
      name: req.body.name,
      userid: req.body.userid,
    });
    console.log("회원가입 등록", reg);
    res.send(reg);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 로그인
exports.login = async (req, res) => {
  try {
    const { inputId, inputPw } = req.body;
    const find = await models.User.findOne({
      where: { userid: inputId },
    });
    if (encrypt.comparePW(inputPw, find.pw)) {
      req.session.user = inputId;
      res.send(req.sessionID);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 로그아웃
exports.logout = (req, res) => {
  const logon = req.session.user;
  if (logon) {
    // 로그인된 회원 >> logout 시켜주기
    req.session.destroy((err) => {
      if (err) throw err;

      res.redirect("/"); // 로그아웃 완료 후 홈으로
    });
  } else {
    // 세션 만료된 회원
    res.send(`
    <script>
        alert('이미 세션이 만료되었습니다.');
        document.location.href="/";
    </script>
    `);
  }
};

// 정보수정
exports.edit_profile = async (req, res) => {
  try {
    const hashedPw = encrypt.hashPW(req.body.pw);
    const response = await models.User.update(
      {
        pw: hashedPw,
        name: req.body.name,
      },
      {
        where: { userid: req.body.userid },
      }
    );

    console.log("수정", response);
    res.send(response);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 정보삭제
exports.delete_profile = async (req, res) => {
  console.log(req.body);
  try {
    const response = await models.User.destroy({
      where: { userid: req.body.userid },
    });
    if (req.body.userid) {
      req.session.destroy((err) => {
        if (err) throw err;
      });
    }
    console.log("삭제", response);
    res.send(response);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
