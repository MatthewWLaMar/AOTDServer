const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const Comments = db.define("comments", {
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Comments
