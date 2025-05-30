// TODO: Create validation middleware for post data
const validatePost = (req, res, next) => {
  const { title, content, author } = req.body;
  const errors = [];

  // TODO: Validate title
  // - Required field
  // - Must be string
  // - Length between 5 and 100 characters

  // TODO: Validate content
  // - Required field
  // - Must be string
  // - Minimum 10 characters

  // TODO: Validate author
  // - Required field
  // - Must be string
  // - Minimum 2 characters

  // TODO: Check if there are validation errors
  // If errors exist, return 400 status with errors array

  // TODO: If validation passes, call next()
};

module.exports = { validatePost };
