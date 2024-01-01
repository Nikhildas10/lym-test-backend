const mongoose=require("mongoose")
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("mongodb atlas connected");
}).catch((err)=>{
    console.log("connection failed",err);
})