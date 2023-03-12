"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Classes, { foreignKey: "classId" });
    }
  }
  Like.init(
    {
      like: DataTypes.BOOLEAN,
      userId: DataTypes.STRING,
      classId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
