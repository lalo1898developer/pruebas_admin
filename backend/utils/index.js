const jwt = require('jsonwebtoken');

module.exports = {
  createToken: (user, roles) => {
    const payload = {
      id: user._id,
      email: user.email,
      roles: roles
    };
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  },
};