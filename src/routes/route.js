const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/movies', function (req, res){
    console.log("The path params in the request are : ", req.params)
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']                  //problem 1
    res.send(movies)
})

//                 /1
// router.get('/movies/:indexNumber', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']                  //problem 2
//     const index=req.params.indexNumber
//     res.send(movies[index])
// })


router.get('/movies/:indexNumber', function (req, res){
    console.log("The path params in the request are : ", req.params)
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']                  //problem 3
    let index=req.params.indexNumber
    if(movies.length <= index || index<0){
    res.send("use a valid index")}
    res.send(movies[index])
})


//problem 4
router.get('/films', function (req, res){
    console.log("The path params in the request are : ", req.params)
    const films=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    res.send(films)
})

//problem 5
router.get('/films/:filmId', function (req, res){
    console.log("The path params in the request are : ", req.params)
    const films=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       const id=(Number(req.params.filmId))
       if(id>films.length || id<=0){
        res.send("Error: No film exists with such id")
    }else{
        res.send(films[id-1])
        }
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;