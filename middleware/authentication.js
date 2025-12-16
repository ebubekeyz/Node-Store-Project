const { UnauthorizedError } = require("../errors");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthorizedError("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { userId, username, email, role } = payload;

    req.user = {
      userId,
      username,
      email,
      role,
    };
    next();
  } catch (error) {
    throw new UnauthorizedError("Authentication Invalid");
  }
};

module.exports = auth;
