const express = require('express')

//controller functions
const { signupUser, loginUser, topupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//topup route
router.post('/topup', topupUser)

module.exports = router