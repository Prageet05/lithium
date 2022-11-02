const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await authorModel.find({author_name:"Chetan Bhagat"})
    const[obj]=specificBook
    let id=obj.author_id
    let allBooks=await bookModel.find({author_id:id})
    res.send({data: allBooks})
}

const updateBookPrice=async function(req,res){
    let obj1=await bookModel.findOne({name:"Two States"})
    let id=obj1.author_id
    let obj2= await authorModel.findOne({author_id:id}).select({author_name:1,_id:0})
    let allBooks=await bookModel.findOneAndUpdate(
        {name:"Two States"},
        {$set: {price:100}},
        {new:true}
    ).select({price:1,_id:0})
    res.send({msg:[obj2,allBooks]})
}

const bookCost=async function(req,res){
    let allBooks=await bookModel.find({price:{$gte:50,$lte:100}})
    let saveData=[]
    for(index of allBooks){
        let data = await authorModel.findOne({author_id:(index.author_id)}).select({author_name:1,_id:0})
        saveData.push(index)
        saveData.push(data)
    }
    res.send({msg:saveData})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBookPrice=updateBookPrice
module.exports.bookCost=bookCost
