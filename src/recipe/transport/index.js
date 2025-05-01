const { serviceLocator } = require("@mqnoy/js-sl");
const GrpcTransport = require("./grpc/GrpcTransport");
const HttpTransport = require("./http/HttpTransport");

const initTransports = async () => {
  /** @type {import('./http/HttpTransport')} */
  const httpTransport = new HttpTransport();

  /** @type {import('./http/GrpcTransport')} */
  const grpcTransport = new GrpcTransport();

  serviceLocator.register("httpTransport", httpTransport);
  serviceLocator.register("grpcTransport", grpcTransport);
};

module.exports = initTransports;
