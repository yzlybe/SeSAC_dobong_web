const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main);

router.post("/login", controller.login);

router.post("/login2", controller.login2);

module.exports = router;
