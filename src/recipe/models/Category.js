const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "id",
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
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
  Category.sync({ alter: true });
}

module.exports = Category;
