require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/products', productRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT,() =>{
            console.log('Listening on Port',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



