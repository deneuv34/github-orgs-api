require('dotenv').config();

module.exports = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_API_URL: process.env.GITHUB_API_URL,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_PORT: process.env.DB_PORT || '5432',
  APP_PORT: process.env.APP_PORT || 3000,
  AUTH_TOKEN: process.env.AUTH_TOKEN
}
