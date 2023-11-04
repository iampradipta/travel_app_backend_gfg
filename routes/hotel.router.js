const express = require('express');
const router = express.Router();

//const hotels = require("../data/hotels")
//const Hotel = require('../model/hotel.model')
const getAllHotelHandler = require("../controllers/hotelController");

router.route('/')
    .get(
        // async (req, res) => {
        //     try {

        //         const hotels = await Hotel.find({});
        //         hotels ? res.json(hotels) : res.status(404).json({ message: " No data found" })
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        getAllHotelHandler
    )

module.exports = router;
