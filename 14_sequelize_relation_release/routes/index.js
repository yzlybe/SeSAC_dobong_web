const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// TODO: 라우터 정의

// get /
router.get("/", controller.main);

// get /players
router.get("/players", controller.getAllPlayer);

// get /players/:playerId
router.get("/players/:playerId", controller.getPlayer);

// post /players
router.post("/players", controller.postPlayer);

// patch /players/:playerId/team
router.patch("/players/:playerId/team", controller.patchPlayer);

// delete /players/:playerId
router.delete("/players/:playerId", controller.deletePlayer);

// 팀 관련

// get /teams
router.get("/teams", controller.getTeams);

// get /teams/:teamId
router.get("/teams/:teamId", controller.getTeam);

// get /teams/:teamId/players
router.get("/teams/:teamId/players", controller.getTeamPlayers);

module.exports = router;
