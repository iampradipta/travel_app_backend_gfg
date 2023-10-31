const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const hotelRouter = require("./routes/hotel.router")
const connectDB = require('./config/dbconfig')

dotenv.config();

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");

const app = express()
connectDB()

app.use(express.json())

const PORT = 3500;

app.get('/', (req, res) => {
    res.send('hello ')
})

app.use("/api/hotels", hotelRouter)
app.use("/api/hoteldata", hotelDataAddedToDBRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("server is running");
    })
})


