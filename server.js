const express = require('express');

const hotelRouter = require("./routes/hotel.router")

const app = express()

app.use(express.json())

const PORT = 3500;

app.get('/', (req, res)=>{
    res.send('hello ')
})

app.use("/api/hotels", hotelRouter)


app.listen(process.env.PORT||PORT,()=>{
    console.log("server is running");
})