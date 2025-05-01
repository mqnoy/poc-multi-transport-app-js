const { serviceLocator } = require("@mqnoy/js-sl");
const RecipeRepository = require("./RecipeRepository");

const initRepositories = async () => {
  /** @type {import('./RecipeRepository')} */
  const recipeRepository = new RecipeRepository();

  serviceLocator.register("recipeRepository", recipeRepository);
};

module.exports = initRepositories;
