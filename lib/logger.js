const { createLogger, transports, format } = require('winston');

module.exports = createLogger({
  level: "debug",
  format: format.combine(
    format.errors(),
    format.json(),
  ),
  transports: [new transports.Console()],
});
