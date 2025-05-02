const { Model, DataTypes, Sequelize } = require("sequelize");

class Category extends Model {
  /**
   *
   * @param {Sequelize} sequelize
   */
  static initModel = (sequelize) => {
    return Category.init(
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
      { sequelize, modelName: "Category", timestamps: false }
    );
  };
}

module.exports = Category;
