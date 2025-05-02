const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

class RecipeRepository {
  createRecipe = (data) => {
    return Recipe.create(data);
  };

  getAllRecipes = () => {
    return Recipe.findAll({
      include: [
        {
          model: Category,
          as: "categories",
          through: {
            attributes: [],
          },
        },
      ],
    });
  };
}

module.exports = RecipeRepository;
