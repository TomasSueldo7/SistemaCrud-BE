const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    if(products.length === 0){
      return res.status(204).json({message:"No existen productos"});
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const name = req.params.name.trim().toLowerCase();
    if(!name){
      return res.status(400).json({message: 'El nombre del producto es requerido'});
    }
    
    const product = await Product.findOne({ name });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const productFound = await Product.findOne({name: req.body.name});
    if(productFound){
      return res.status(400).json({message: 'El producto ya existe'});
    }
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Error al editar el producto', error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};