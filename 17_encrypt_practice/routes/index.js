const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 렌더링

// 메인
router.get("/", controller.main);
// 로그인
router.get("/login", controller.loginPage);
// 회원가입
router.get("/register", controller.registerPage);
// 프로필
router.get("/profile", controller.profilePage);

// 요청

// 회원가입
router.post("/register", controller.register);
// 로그인
router.post("/login", controller.login);
// 로그아웃
router.get("/logout", controller.logout);
// 정보수정
router.post("/profile/edit", controller.edit_profile);
// 정보삭제
router.post("/profile/delete", controller.delete_profile);

module.exports = router;
