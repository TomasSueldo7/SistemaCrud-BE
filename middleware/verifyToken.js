const { JWT_SECRET } = require('../src/config.js')
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acceso denegado: Token no proporcionado o formato inválido' });
  }

  const token = authHeader.split(' ')[1]; 

  try {
    const verified = jwt.verify(token, JWT_SECRET); 
    req.user = verified; 
    next(); 
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};
