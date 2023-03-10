"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Comment, { foreignKey: "classId" });
      this.hasMany(models.Like, { foreignKey: "classId" });

      this.belongsTo(models.User, { foreignKey: "creatorId" });
    }
  }
  Classes.init(
    {
      name: DataTypes.STRING,
      class: DataTypes.STRING,
      creatorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
