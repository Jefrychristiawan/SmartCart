const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Product'
        },
        quantity:{
            type: Number
        }
    }],
    total: {
        type: Number
    }
})

module.exports = mongoose.model('Order', orderSchema)
// async function placeOrder(userId, products) {
//     try {
//         // Fetch user information
//         const user = await User.findById(userId);

//         if (!user) {
//             throw new Error('User not found');
//         }

//         // Calculate total price
//         let total = 0;

//         // Validate products and calculate total price
//         const validatedProducts = await Promise.all(products.map(async (item) => {
//             const product = await Product.findById(item.product);
//             if (!product) {
//                 throw new Error(`Product with id ${item.product} not found`);
//             }
//             total += product.price * item.quantity;
//             return {
//                 product: item.product,
//                 quantity: item.quantity
//             };
//         }));

//         // Create new order
//         const newOrder = new Order({
//             user: userId,
//             products: validatedProducts,
//             total: total
//         });

//         // Save the order
//         await newOrder.save();

//         // Optionally, update related models (e.g., update stock in Product model)

//         return newOrder;
//     } catch (error) {
//         console.error('Error placing order:', error);
//         throw error;
//     }
// }
