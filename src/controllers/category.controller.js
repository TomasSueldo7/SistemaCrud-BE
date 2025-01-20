const Category = require('../models/category.model');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    if(categories){
      return res.status(204);
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las categorias', error });
  }
};