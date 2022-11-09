const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const dataController = require("../controllers/dataController")


router.get("/test-me", function (req, res) {
    res.status(200).send("Welcome")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/getByDistrictId", CowinController.getByDistrictId);
router.get("/weather/london", dataController.getLondonWeather);
router.get("/weather/london/temperature", dataController.getLondonTemperature);
router.get("/getSelectedCities", dataController.getSelectedCities);
router.post("/meme", dataController.meme);
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;