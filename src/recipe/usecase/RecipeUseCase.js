const { serviceLocator } = require("@mqnoy/js-sl");

class RecipeUseCase {
  constructor() {
    /** @type {import('../repositories/RecipeRepository')} */
    this.recipeRepository = serviceLocator.get("recipeRepository");
  }

  createRecipe = async (data) => {
    if (!data.title || !data.ingredients || !data.instructions) {
      throw new Error("All fields are required");
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
