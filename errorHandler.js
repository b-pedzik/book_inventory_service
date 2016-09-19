const handleClientError = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

const handleServerError = (err, req, res) => {
  res.status(err.status || 500);
  console.error(err.stack);
  res.json({
    message: err.message,
    error: (process.env.NODE_ENV === 'production') ? {} : err.stack
  });
};

module.exports = {
  handleClientError,
  handleServerError
};
