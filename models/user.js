'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  User.init(
    {
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      tel: DataTypes.STRING,
      passwHash: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      role: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      underscored: true,
    }
  );
  return User;
};
