const Recipe = require("../models/Recipe");

class RecipeRepository {
  createRecipe = (data) => {
    return Recipe.create(data);
  };

  getAllRecipes = () => {
    return Recipe.findAll();
  };
}

module.exports = RecipeRepository;
