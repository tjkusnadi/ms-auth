const jwt = require('jsonwebtoken');
const config = require('../../config');

const verify = async(payload) => {
  const decode = await jwt.verify(payload, config.secretKey, (err, decoded) => {

    if (err) {
      return err;
    }
    return decoded;
  });

  return decode;
}

module.exports = { verify };