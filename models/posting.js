
module.exports = (sequelize, DataTypes) => {
    const Posting = sequelize.define('posting', {
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
    })
    return Posting;
}
