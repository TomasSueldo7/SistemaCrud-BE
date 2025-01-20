const Category = require('../models/category.model');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    if(categories.length === 0){
      return res.status(204).json({message:"No existen categorias"});
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las categorias', error });
  }
};

exports.createCategory = async (req, res) => {
    try {
      const categoryFound = await Category.findOne({name: req.body.name});
      if(categoryFound){
        return res.status(400).json({message: 'La categoría ya existe'});
      }
      const category = await Category.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear la categoría', error });
    }
};

exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: 'Error al editar la categoría', error });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    return res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la categoría', error });
  }
};