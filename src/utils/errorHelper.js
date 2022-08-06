class CustomError extends Error {
  constructor(message, code, status) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    (this.code = code), (this.statusCode = status), (this.message = message);
  }
}

const ForbiddenError = class extends CustomError {
  constructor() {
    super("You don't have permission", "FORBIDDEN_ERROR", 403);
  }
};

const NotFoundError = class extends CustomError {
  constructor() {
    super("The data you are looking for was not found", "NOT_FOUND", 404);
  }
};

const DatabaseError = class extends CustomError {
  constructor() {
    super("Need Database Arguments to Model", "INTERNAL_SERVER_ERROR", 500);
  }
};

const RequestError = class extends CustomError {
  constructor(message, code, status) {
    super(message);
    this.name = this.constructor.name;
    (this.code = code), (this.statusCode = status), (this.message = message);
  }
};

const errorHandler = (err, req, res, next) => {
  const { statusCode, message, code, name } = err;
  res.errMessage = message;
  res.status(statusCode || 500).send({
    statusCode: statusCode || 500,
    message: name !== "ReferenceError" ? message : "Something went wrong!",
    code: code || "INTERNAL_SERVER_ERROR"
  });
};

module.exports = {
  errorHandler,
  ForbiddenError,
  RequestError,
  NotFoundError,
  DatabaseError
};
