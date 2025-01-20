const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    if(users){
      return res.status(204);
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    const email = userData.email

    const userFound = await User.findOne({email: email})

    if(userFound){
      return res.status(400).json({'message': 'El email ya se encuentra registrado'});
    }

    const user = await userData.save();
    return res.status(201).json(user);
    
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};