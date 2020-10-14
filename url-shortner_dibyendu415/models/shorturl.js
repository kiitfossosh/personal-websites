const mongoose = require('mongoose')
const shortId = require('shortid')
const shorturlschema = new mongoose.Schema({
    full:{
        type: String,
        require :true
    },
    short:{
        type : String,
        require : true,
        default : shortId.generate
    },
    clicks:{
        type : Number,
        required : true,
        default : 0
    }
})


module.exports = mongoose.model('shorturl', shorturlschema)