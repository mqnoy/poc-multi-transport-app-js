const { Model, DataTypes, Sequelize } = require("sequelize");

class RecipeCategory extends Model {
  /**
   *
   * @param {Sequelize} sequelize
   */
  static initModel = (sequelize) => {
    return RecipeCategory.init(
      {
        recipe_id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
        },
        category_id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
        },
      },
      { sequelize, modelName: "RecipeCategory", timestamps: false }
    );
  };
}

module.exports = RecipeCategory;
