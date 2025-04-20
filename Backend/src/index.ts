import express from "express"
import dotenv from "dotenv"
import  mongoose from "mongoose"
import notesRoutes from "./routes/note/noteRoutes"

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

  app.use("/api/notes",notesRoutes)




  app.listen(PORT,()=>{
    console.log(`Server is running on port${PORT}`)
  })
