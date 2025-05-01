const { serviceLocator } = require("@mqnoy/js-sl");
const RecipeUseCase = require("./RecipeUseCase");

const initUseCases = async () => {
  /** @type {import('./RecipeUseCase')} */
  const recipeUseCase = new RecipeUseCase();

  serviceLocator.register("recipeUseCase", recipeUseCase);
};

module.exports = initUseCases;
