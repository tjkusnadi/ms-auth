
const { authHelper, statusCode } = require('../../utils');

const verifyHandlers = async (req, res) => {

  const { 
    headers: {
      token
    }
  } = req;
  
  const verifyResult = await authHelper.verify(token);

  if (verifyResult.data) {
    res.status(statusCode.OK);
    return res.send({userData: verifyResult.data.userData});
  }
  
  res.status(statusCode.UNAUTHORIZED);
  return res.send({ error: 'token invalid' });

};

module.exports = verifyHandlers;
