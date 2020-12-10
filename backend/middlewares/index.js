const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;
      next();

      /*const { authorization, Module, Permission } = req.headers;
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;
      decoded.payload.modules.foreach(module => {
        if(module.Module.toString() == Module)
          if(module.Permission.toString() == Permission) next();
      })*/
      
    } catch (error) {
      res.status(401).json({ message: 'Auth error', error });
    }
  },
};

