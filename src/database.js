import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/ExpressUser", {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  mongoose.connection.on("error", err => {
  
    console.log("err", err)
  
  })
  mongoose.connection.on("connected", (err, res) => {
  
    console.log("mongoose is connected db connection")
  
  })
   