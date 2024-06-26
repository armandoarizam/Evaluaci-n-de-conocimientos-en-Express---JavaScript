const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, 'evaluacionExpress');
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticación no válido' });
  }
};

module.exports = authMiddleware;
