const sequelize = require("../../config/database");
const Category = require("./Category");
const Recipe = require("./Recipe");
const RecipeCategory = require("./RecipeCategory");

const initModels = async () => {
  console.debug(`initModels`);

  Recipe.initModel(sequelize);
  Category.initModel(sequelize);
  RecipeCategory.initModel(sequelize);

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

  // sync models here
  if (process.env.DB_AUTO_MIGRATE) {
    Recipe.sync({ alter: true });
    Category.sync({ alter: true });
    RecipeCategory.sync({ alter: true });
  }
};

module.exports = initModels;
