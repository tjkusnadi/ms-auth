require('dotenv').config();

const config = {
  secretKey: process.env.SECRET_KEY,
  db: {
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
  },
  http: {
    httpPort: process.env.HTTP_PORT
  }
};

module.exports = config;