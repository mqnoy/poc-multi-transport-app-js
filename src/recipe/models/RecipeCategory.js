const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Category = require("./Category");
const Recipe = require("./Recipe");

const RecipeCategory = sequelize.define(
  "RecipeCategory",
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
  {
    timestamps: false,
  }
);

if (process.env.DB_AUTO_MIGRATE) {
  RecipeCategory.sync({ alter: true });
}

Recipe.belongsToMany(Category, {
  through: RecipeCategory,
  foreignKey: "recipe_id",
  as: "categories",
  otherKey: "category_id",
});

Category.belongsToMany(Recipe, {
  through: RecipeCategory,
  foreignKey: "category_id",
  as: "recipes",
  otherKey: "recipe_id",
});

module.exports = RecipeCategory;
