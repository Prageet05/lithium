const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createAuthor= async function (req, res) {
    let author = req.body
    const {author_name,address}=author
    if(!author_name){
        return res.send("name is required")
    }if(!address){
        return res.send("address is required")
    }
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await authorModel.find()
    res.send({data: authors})
}

const createBook= async function (req, res) {
    let book = req.body
    const { bookName} = book
    if (!bookName) {
    res.send("bookName is Required");
  }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: specificBook})

}

const createNewPublisher = async function (req, res) {
    let data = req.body;
    const { name, headQuater } = data;
    if (!name) {
      res.send("Name is Required");
    }
    if (!headQuater) {
      res.send("headQuarter is Required");
    }
    let savedData = await publisherModel.create(data);
    res.send({ msg: savedData });
  };
  
  const getNewPublisher = async function (req, res) {
    let allUsers = await publisherModel.find();
    res.send({ msg: allUsers });
  };
  
  const putNewBook = async function (req, res) {
    let obj1 = await publisherModel.findOne({ name: "Penguin" });
    let id1 = obj1._id;
    console.log(id1);
    let obj2 = await publisherModel.findOne({ name: "HarperCollins" });
    let id2 = obj2._id;
    console.log(id2);
  
    let newbooks = await bookModel.updateMany(
      { publisher: [id1, id2] },
      { $set: { isHardCover: false } },
      { new: true }
    );
    let updatedbooks = await bookModel.find({ newbooks });
    res.send({ data: updatedbooks });
  };
  
  const updateRating = async function (req, res) {
    let arr1 = await authorModel.find({ ratings: { $gt: 3.5 } });
    let newarr = [];
    for (i of arr1) {
      id = i._id;
      let tosend = await bookModel.findOneAndUpdate(
        { author_id: id },
        { $inc: { price: 10 } },
        { new: true }
      );
      newarr.push(tosend);
    }
    res.send({ mes: newarr });
  };

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createNewPublisher=createNewPublisher
module.exports.getNewPublisher=getNewPublisher
module.exports.putNewBook=putNewBook
module.exports.updateRating=updateRating
