"use strict";

// const fs = require('fs');
// const path = require('path');
const Sequelize = require("sequelize");
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + "/../config/config.json")["development"]; //+ []는 접근법. json에서는 .을 이용할 수 없기 때문
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

console.log("config >> ", config);

// const sequelize = new Sequelize(DB명, 사용자명, 비밀번호, config 정보 전체)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; // db = {sequlize:sequelize} //+ db에 시퀄라이즈를 추가하는 중
db.Sequelize = Sequelize; // db = {sequelize:sequelize, Sequelize:Sequelize}

db.Visitor = require("./Visitor")(sequelize, Sequelize);
module.exports = db;
// db라는 변수를 내보내기 하는 중
