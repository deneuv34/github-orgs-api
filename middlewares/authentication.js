const { AUTH_TOKEN } = require("../lib/config");

const authentication = (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  if (token !== AUTH_TOKEN) return res.status(401).json({ error: "Unauthorized" });
  next();
}

module.exports = authentication;
