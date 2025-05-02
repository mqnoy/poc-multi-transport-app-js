const express = require("express");
const { serviceLocator } = require("@mqnoy/js-sl");
const { expressAsyncWrapper } = require("@mqnoy/async-wrapper");

class HttpTransport {
  constructor() {
    /** @type {import('../../usecase/RecipeUseCase')} */
    this.recipeUseCase = serviceLocator.get("recipeUseCase");
  }

  getRoutes = () => {
    const route = express.Router();

    route.post("/", this.createRecipe);
    route.get("/", this.getRecipes);

    return route;
  };

  createRecipe = expressAsyncWrapper(async (req, res) => {
    const result = await this.recipeUseCase.createRecipe(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  });

  getRecipes = expressAsyncWrapper(async (req, res, next) => {
    const recipes = await this.recipeUseCase.getAllRecipes();

    res.status(200).json({
      status: "success",
      data: recipes,
      metaData: {},
    });
  });
}

module.exports = HttpTransport;
