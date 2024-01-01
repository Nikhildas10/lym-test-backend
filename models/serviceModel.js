const mongoose=require("mongoose")

const serviceSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

const services=mongoose.model("services",serviceSchema)
module.exports=services