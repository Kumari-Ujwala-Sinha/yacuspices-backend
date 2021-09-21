const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
    collection_id:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    description:{
        type:String,
    },
    category:{
        type:Array,
        required:true
    },
    image_url:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Collections", collectionSchema)