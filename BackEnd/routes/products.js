const express = require('express')
const {
    getAllProducts,
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/all',requireAuth, getAllProducts)

router.get('/', requireAuth, getProducts)

router.get('/:id', getProduct)

router.post('/', requireAuth, createProduct)

router.delete('/:id', requireAuth, deleteProduct)

router.patch('/:id', requireAuth, updateProduct)
module.exports = router