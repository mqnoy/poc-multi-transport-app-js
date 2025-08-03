const { serviceLocator } = require("@mqnoy/js-sl");
const AppError = require("../../utils/AppError");

class RecipeUseCase {
  constructor() {
    /** @type {import('../repositories/RecipeRepository')} */
    this.recipeRepository = serviceLocator.get("recipeRepository");

    /** @type {import('@mqnoy/lolog').Lolog} */
    this.logger = serviceLocator.get("lolog");
    this.logger = this.logger.setChild({ scope: "usecase/recipe" });
  }

  createRecipe = async (req) => {
    const data = req.body;
    this.logger.debug("without uuid", { data });
    const logger = this.logger.child({ "http.request.id": req.requestId });
    logger.debug("with uuid", { data });

    if (!data.title || !data.ingredients || !data.instructions) {
      logger.warn(
        "Missing required fields: title, ingredients, or instructions.",
        { data }
      );
      throw new AppError(
        "Missing required fields: title, ingredients, or instructions.",
        400
      );
    }

    if (data.title === "duar") {
      throw new Error("title cant be duar.");
    }

    return await this.recipeRepository.createRecipe(data);
  };

  getAllRecipes = async () => {
    this.logger.debug("getAllRecipes without uuid");
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
