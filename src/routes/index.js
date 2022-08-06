const verifyToken = require('./verify');

const routers = [
  ...verifyToken
];

module.exports = (app) => {
  routers.forEach(router => app.use(router));
};