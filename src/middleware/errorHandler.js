const AppError = require("../utils/AppError");

// FIXME: can i use for other transport ? it's possible to support them?
const errorHandler = (logger) => {
  return (err, req, res, _next) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    logger
      .setChild({ "http.request.id": req.requestId })
      .error("error handler", err);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong! Please try again later.",
    });
  };
};

module.exports = errorHandler;
