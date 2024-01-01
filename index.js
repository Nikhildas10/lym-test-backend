require("dotenv").config()
const express=require("express")
const cors=require("cors")
const routes=require("./routes/router")

const express_Server=express()
express_Server.use(cors())
express_Server.use(express.json())
express_Server.use(routes)
require("./db/connection")

express_Server.use("/uploads", express.static("./uploads"));


const port=4000 || process.env.port
express_Server.listen(port,()=>{
    console.log("express server started");
})

