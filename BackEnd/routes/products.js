const express = require('express')
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)
module.exports = router