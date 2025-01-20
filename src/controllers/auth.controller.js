const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config');

exports.login = async(req, res) => {
  try{
    if(!(req.body.email && req.body.password)){
      return res.status(400).json({'message': 'El email y la contraseña son requeridos'});
    }

    const userFound = await User.findOne({email: req.body.email})

    if(!userFound){
      return res.status(400).json({'message': 'El email no se encuentra registrado'});
    }

    if(bcrypt.compareSync(req.body.password, userFound.password)){
      const payload = {
        userId: userFound._id,
        userEmail: userFound.email
      }

      const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'})
      const role = userFound.role
      return res.status(200).json({message: 'Inicio de sesion exitoso', token, role, user: {id: userFound._id, name: userFound.name, email: userFound.email}});
    }
    else{
      return res.status(400).json({'message': 'La contraseña es incorrecta'});
    }
  }
  catch(error){
    return res.status(500).json({ message: 'Error al validar el usuario', error });
  }
}