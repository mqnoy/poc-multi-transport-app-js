const { serviceLocator } = require("@mqnoy/js-sl");

class GrpcTransport {
  constructor() {
    /** @type {import('../../usecase/RecipeUseCase')} */
    this.recipeUseCase = serviceLocator.get("recipeUseCase");
  }

  getServices = () => {
    return {
      recipe: {
        Create: this.createRecipe,
      },
      user: {
        Me: this.me,
      },
    };
  };

  createRecipe = async (call, callback) => {
    // try mutation with grpc call
    // TODO: make support with validator
    // TODO: how to throw with expected error
    // TODO: handle expected error on interceptor
    // TODO: make wrapper async try-catch
    try {
      console.debug(`invoked Create`);
      const result = await this.recipeUseCase.createRecipe(call.request);
      const response = {
        title: result.title,
        ingredients: result.ingredients,
        instructions: result.instructions,
        time: result.createdAt,
      };

      callback(null, response);
    } catch (error) {
      console.error(error);
    }
  };

  me = (call, callback) => {
    console.debug(`invoked Me`);
    const response = {
      time: new Date().toISOString(),
    };

    callback(null, response);
  };
}

module.exports = GrpcTransport;
