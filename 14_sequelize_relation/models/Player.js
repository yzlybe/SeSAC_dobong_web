const PlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    "Player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //  tableName: "player", //+ 이 속성을 안적으면 모델 이름에서 유추해서 자동 설정
      freezeTableName: true,
    }
  );

  return Player;
};

module.exports = PlayerModel;
