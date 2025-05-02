const { serviceLocator } = require("@mqnoy/js-sl");
const AppError = require("../../utils/AppError");

class RecipeUseCase {
  constructor() {
    /** @type {import('../repositories/RecipeRepository')} */
    this.recipeRepository = serviceLocator.get("recipeRepository");
  }

  createRecipe = async (data) => {
    if (!data.title || !data.ingredients || !data.instructions) {
      throw new AppError(
        "Missing required fields: title, ingredients, or instructions.",
        400
      );
    }
    return await this.recipeRepository.createRecipe(data);
  };

  getAllRecipes = async () => {
    return await this.recipeRepository.getAllRecipes();
  };

  getRecipeById = async (id) => {
    return await this.recipeRepository.getRecipeById(id);
  };

  updateRecipe = async (id, data) => {
    return await this.recipeRepository.updateRecipe(id, data);
  };

  deleteRecipe = async (id) => {
    return await this.recipeRepository.deleteRecipe(id);
  };
}

module.exports = RecipeUseCase;
