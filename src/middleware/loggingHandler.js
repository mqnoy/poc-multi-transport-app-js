const loggingHandler = (logger) => {
  return (req, res, next) => {
    res.on("finish", () => {
      logger.info("http-access", { req, res });
    });

    next();
  };
};

module.exports = loggingHandler;
