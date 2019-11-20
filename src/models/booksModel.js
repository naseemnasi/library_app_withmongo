const mongoose=require('mongoose')

var booksModel=mongoose.model('book',{
    title:String,
    genere:String,
    auther:String,
    image:String

})
module.exports={booksModel}