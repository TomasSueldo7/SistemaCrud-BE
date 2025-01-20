const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    if(users.length === 0){
      return res.status(204).json({message:"No existen usuarios"});
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

exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error al editar el usuario', error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};