"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Like, { foreignKey: "userId" });
      this.hasMany(models.Comment, { foreignKey: "userId" });
      this.hasMany(models.Classes, { foreignKey: "creatorId" });
      this.hasMany(models.Riply, { foreignKey: "userId" });
      this.belongsToMany(models.Role, { through: "User_roles" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  /* this beforeCreate is a simple function known as a hook, will be running
 everytime before creating the user object in user table */
  User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword; //this line will replace user's actual password with hashed password
  });
  return User;
};
