const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        // create aa token
        const token = createToken(user._id)
        const username = user.username
        const balance = user.balance
        res.status(200).json({username, email, token, balance})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// signup user
const signupUser = async (req, res) => {
    const {username, email, password} = req.body

    try{
        const user = await User.signup(username, email, password)

        // create aa token
        const token = createToken(user._id)

        res.status(200).json({username, email, token, balance})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//topup user
const topupUser = async (req, res) => {
    try {
        const {email, balance} = req.body
        const user = await User.findOne({ email })
        if(!user){
            throw Error('Incorrect email')
        }

        user.balance += balance; 
        await user.save();
        res.status(200).json({ message: 'Balance updated successfully', username, email, token, balance });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { signupUser, loginUser, topupUser }