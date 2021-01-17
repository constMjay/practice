const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()
dotenv.config()
/**
 * Import Routes
 */
const loginRoutes = require('./backend/routes/login')
/**
 * Mongodb Connection
 */
const url = process.env.MONGODB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database!'))
    .catch((err) => console.log('Cant connect to database:', err))
/**
 * View Engine Setup & Public folder
 */
app.set('views', path.join(__dirname, "backend/views"))
app.set('view engine', 'ejs')
app.use("/assets", express.static(path.join(__dirname, "frontend/assets")))

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
app.use('/', loginRoutes)

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on port ${process.env.PORT}`)
})