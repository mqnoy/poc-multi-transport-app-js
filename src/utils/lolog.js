const { Transports, Format, Lolog } = require("@mqnoy/lolog");

const format =
  process.env.APP_ENV === "local"
    ? Format.DefaultFormat()
    : Format.ElasticFormat({
        serviceName: "APP",
        convertReqRes: true,
        convertErr: true,
      });

const lolog = new Lolog({
  level: "debug",
  defaultMeta: { service: "APP" },
  format,
  transports: [Transports.ConsoleTransport()],
});

module.exports = lolog;
