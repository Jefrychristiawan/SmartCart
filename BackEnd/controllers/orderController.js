const Product = require('../models/productModel')
const User = require('../models/userModel')
const Order = require('../models/orderModel')

const createOrder = async (req, res) => {
    const {email, products} = req.body
    
        const user = await User.findOne({email});
        
        if (!user) {
            throw new Error('User not found');
        }
        
        let total = 0;
        const validatedProducts = await Promise.all(products.map(async (item) => {
            const product = await Product.findById(item._id);
            if (!product) {
                throw new Error(`Product with id ${item._id} not found`);
            }
            total += product.price * item.quantity;
            return {
                product: item._id,
                productName: item.name,
                quantity: item.quantity
            };
        }));
        
                // Create new order
        const newOrder = new Order({
            userEmail: email,
            products: validatedProducts,
            total: total
        });
        
                // Save the order
        await newOrder.save();
            
                    // Optionally, update related models (e.g., update stock in Product model)
            
        res.status(200).json(newOrder)
    
}

module.exports = {createOrder}