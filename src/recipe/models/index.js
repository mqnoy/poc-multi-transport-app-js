const sequelize = require("../../config/database");

const Recipe = require("./Recipe");

const initModels = async () => {
  Recipe.initModel(sequelize);

  // Define relationships here
};

module.exports = initModels;
