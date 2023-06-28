exports.createError = (status, message) => {
  const error = Error();
  error.status = status;
  error.message = message;
  return error;
};
