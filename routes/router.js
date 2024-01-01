const express=require("express")

const router=new express.Router()
const usercontrol=require("../controllers/usercontrol")
const services = require("../models/serviceModel")
const upload = require("../middleware/multerMiddleware.")

module.exports=router

//add service
router.post("/services/add-service",upload.single("image"),usercontrol.createService)

//get service
router.get("/services/get-service",usercontrol.getService)