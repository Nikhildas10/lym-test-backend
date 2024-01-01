const services = require("../models/serviceModel");

//create services
exports.createService=async(req,res)=>{
    const{title,description}=req.body
    const image=req.file?.filename
    console.log(image);
    try{
        const existingService=await  services.findOne({title})
        if(existingService){
          res.status(400).json("service already exists")
        }
        else{
          const newService=new services({
              title,description,image
          })
         await newService.save()
         res.status(200).json("service created successfully")
        }
    }
    catch(err){
        res.status(401).json("service api failed",err)
    }
}

//get service data

exports.getService=async(req,res)=>{
try{
const servicesData=await services.find()
if(services){
    res.status(200).json(servicesData)
}
else{
    res.status(404).json("no services found")
}
}
catch(err){
res.status(401).json(err)
}
}