const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const Posting = db.define("posting", {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    owner_id: {
        type: DataTypes.INTEGER,
    },
});


module.exports = Posting;

