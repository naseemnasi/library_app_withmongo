const mongoose = require('mongoose');

var addAuthorModel =mongoose.model('auther',{
         name:String,
         country:String,
         age:Number,
         image:String
        });

module.exports = {addAuthorModel};