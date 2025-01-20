const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    if(products){
      return res.status(204);
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

exports.saveProduct = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    if(products){
      return res.status(204).json({message: "No se encontraron productos"});
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener productos', error });
  }
};