const db = require("../config/database");
const Sequelize = require("sequelize");

const User = db.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  //timestamps:false,
  underscored: true,
  //   freezeTableName: true,
  //   tableName: "users",
});

module.exports = User;
