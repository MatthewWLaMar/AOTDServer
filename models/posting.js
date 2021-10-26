
module.exports = (sequelize, DataTypes) => {
    const Sighting = sequelize.define('sighting', {
        bird: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rarity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        owner_id: {
            type: DataTypes.INTEGER,
        },
        private1: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
    return Sighting;
}
