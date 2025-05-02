const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Recipe = sequelize.define(
  "Recipe",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "id",
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

if (process.env.DB_AUTO_MIGRATE) {
  Recipe.sync({ alter: true });
}

module.exports = Recipe;
