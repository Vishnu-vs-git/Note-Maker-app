import express,{Request,response} from "express";
import Note from "../../models/Note";


export const addNote=async (req:Request,res:Response):Promise<void>=>{
  try{
    const{title, content,subject}=req.body;
    const newNote= new Note({
      title,
      content,
      subject,
    
    })
     const savedNote=await newNote.save()
     res.status(201).json(savedNote)


  }catch(error){
    res.status(500).json({message:"Error saving note"})
  }
}