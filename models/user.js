module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      birthday: {
          type: DataTypes.DATEONLY,
          allowNull: true,
      }
  })
  return User;
}