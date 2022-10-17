const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger.js')
//importing external package
const underscore = require('underscore')
//Problem 1
const hii =require('../logger/logger.js')
//Problem 2
const prob2=require('../util/helper.js')
//Problem 3
const prob3 =require('../validator/formatter.js')
//Problem 4
const prob4=require('../lodash.js')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    //problem no. 1
    console.log("Calling my function ",hii.myDetails())
    //problem no. 2
    console.log(prob2.problem2())
    //problem no. 3
    console.log(prob3.problem3("    FunctionUp    "));
    //problem no. 4
    console.log(prob4.problem4())
    
    res.send('this is my first api!')
});
    //To be tried what happens if we send multiple response
    //res.send('My second api!')



module.exports = router;

