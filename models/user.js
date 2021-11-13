const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const User = db.define("user", {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  passwordhash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = User;