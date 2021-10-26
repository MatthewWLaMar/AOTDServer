module.exports = (sequelize, DataTypes) => {
    const Merchandise = sequelize.define('merchandise', {
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Merchandise;
}
