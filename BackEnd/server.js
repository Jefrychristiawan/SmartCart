require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/user')
const orderRoutes = require('./routes/order')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()

//middleware

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/order', orderRoutes)

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



