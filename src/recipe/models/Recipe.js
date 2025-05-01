const { DataTypes, Model, Sequelize } = require("sequelize");

class Recipe extends Model {
  /**
   *
   * @param {Sequelize} sequelize
   */
  static initModel = (sequelize) => {
    Recipe.init(
      {
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
      },
      { sequelize, modelName: "Recipe" }
    );
  };
}

module.exports = Recipe;
