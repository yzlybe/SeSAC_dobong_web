// TODO: 컨트롤러
const { Op } = require("sequelize");
const { Player, Profile, Team } = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

// 선수 관련

// 전체 선수 목록 가지고 오기
// get /players
exports.getAllPlayer = async (req, res) => {
  try {
    const players = await Player.findAll();
    console.log(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 특정 선수 조회 (player, profile)
// get /players/:playerId
exports.getPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const player = await Player.findOne({
      where: { player_id: playerId },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
    });
    console.log(player);
    res.json(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 선수 추가
// post /players
exports.postPlayer = async (req, res) => {
  try {
    const { name, age, teamid } = req.body;
    const newPlayer = await Player.create({ name, age, teamid });
    res.json(newPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 어떤 선수를 어떤 팀으로 변경할 건지
// patch /players/:playerId/team
exports.patchPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const { teamid } = req.body;
    const updatePlayer = await Player.update(
      { teamid },
      { where: { player_id: playerId } }
    );
    console.log(updatePlayer);
    res.json(updatePlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 선수 정보 삭제
// delete /players/:playerId
exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const destroyPlayer = await Player.destroy({
      where: { player_id: playerId },
    });

    if (destroyPlayer) {
      res.send("삭제 성공");
    } else {
      res.send("삭제 실패");
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 팀 관련

// 전체 팀 조회
// get /teams
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;

    // 팀 이름 오름차순 정렬
    if (sort === "name_asc") {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]],
      });
      // 특정 이름 팀 조회
    } else if (search) {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: { name: { [Op.like]: `%${search}` } },
      });
      // 그냥 조회
    } else {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
    res.send(teams);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 특정 팀 정보 조회
// get /teams/:teamId
exports.getTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
    });

    res.send(team);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 특정 팀 소속 선수 조회
// get /teams/:teamId/players
exports.getTeamPlayers = async (req, res) => {
  try {
    const { teamId } = req.params;
    const teamPlayers = await Team.findOne({
      where: { team_id: teamId },
      include: [{ model: Player }],
    });

    res.send(teamPlayers);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
