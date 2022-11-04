const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    author_id: {
        type: ObjectId,
        ref: "Author"
    }, 
    bookName:{
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    ratings: {
        type:Number,
        required:true,
    },
    publisher:{
        type:ObjectId,
        ref:"publisherModel"
    },
    isHardCover:{
        type:Boolean,
        default:false
    },

}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)