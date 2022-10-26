const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel=require('../models/bookModel')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/book",async(req,res)=>{
    let details=req.body;
    let newDetails=await bookModel.create(details)
    res.send({myCollections:newDetails})
})


router.get("/demand",async(req,res)=>{
    let library=await bookModel.find()
    res.send({collection:library})
})


router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;