const createHandler = (handler) => {
  return async (req, res, next) => {
    let error;
    try {
      await handler(req, res);
    } catch (err) {
      error = err;
      return res.status(err.statusCode).send({
        code: error.code,
        statusCode: err.statusCode,
        message: err.message,
        error: error.error
      });
    }
    return next(error);
  };
};

module.exports = createHandler;
