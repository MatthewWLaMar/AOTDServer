const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const Merchandise = db.define("merchandise", {

    merchTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hyperlink: {
        type: DataTypes.STRING,
        allowNull: null,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        
    },

});


module.exports = Merchandise;



