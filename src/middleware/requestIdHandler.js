const { v4: uuidv4 } = require("uuid");

const requestIdHandler = (req, res, next) => {
  const incomingId = req.headers["x-request-id"];
  const requestId = typeof incomingId === "string" ? incomingId : uuidv4();

  req.headers["x-request-id"] = requestId;
  res.setHeader("X-Request-ID", requestId);
  req.requestId = requestId;
  next();
};

module.exports = requestIdHandler;
