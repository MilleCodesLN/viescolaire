const db = require("../config/database");
const Sequelize = require("sequelize");

const Message = db.define("messages", {
    messages: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    //timestamps:false,
    underscored: true,
    //   freezeTableName: true,
    //   tableName: "users",
});

module.exports = Message;
