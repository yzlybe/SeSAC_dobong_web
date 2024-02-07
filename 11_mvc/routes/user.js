const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET /user
router.get("/", controller.user); //+ app.js에서 use라고 정보를 보냈기때문에 기본경로가 ~/use가 되어있는 상태다
/* 
[예시]
GET /user/aa
router.get("/aa", controller.a);

POST /user/login
router.port("/login", controller.b);
*/

module.exports = router;
