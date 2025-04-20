import express from "express"
import dotenv from "dotenv"
import  mongoose from "mongoose"

dotenv.config()


mongoose.connect(process.env.MONGO as string)
.then(()=>{
  console.log("Connected to mongodb")
})
.catch((err)=>{
  console.log(err)
})








const app =express()
  const PORT=process.env.PORT||5000

  app.get("/",(req,res)=>{
    res.send("Hello from backend");


  })

  app.listen(PORT,()=>{
    console.log(`Server is running on port${PORT}`)
  })
