const Product = require('../models/productModel')
const mongoose = require('mongoose')

const getAllProducts = async (req, res) => {
    const user_id = req.user._id
    
    const products = await Product.find({ user_id: { $ne: user_id } })
                                      .sort({ createdAt: -1 });
    
    res.status(200).json(products)
}
//get all products
const getProducts = async(req,res) =>{
    const user_id = req.user._id
    
    const products = await Product.find({ user_id  }).sort({createdAt: -1})
    
    res.status(200).json(products)
}
//get a single product
const getProduct = async(req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
}

//create new product
const createProduct = async (req, res) => {
    const {name, description, price, category, image, stock} = req.body
    
    try{
        const user_id = req.user._id
        const product = await Product.create({name, description, price, category, image, stock, user_id})
        
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a product
const deleteProduct = async(req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const product = await Product.findOneAndDelete({_id: id})

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
}

// update a product
const updateProduct = async (req,res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const product = await Product.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!product){
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
}

module.exports = {
    getAllProducts,
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}