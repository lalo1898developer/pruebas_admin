const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    try {

      const { authorization, module } = req.headers;
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const roles = Object.values(decoded.roles);
      var is_valid = false;

      roles.forEach(role => {
        if(role._id == module) is_valid = true;
      });

      is_valid ? next() : res.status(401).json({ message: 'Auth error' });

    } catch (error) {
      console.log(error);
      res.status(401).json({ message: 'Auth error', error });
    }
  },
};
