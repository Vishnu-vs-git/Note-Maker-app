import express,{Request,Response} from "express";
import Note from "../../models/Note.js";


export const addNote=async (req:Request,res:Response):Promise<void>=>{
  try{
     console.log("hello")
     console.log(req.body)
    const{title, content,subject}=req.body;
    console.log(title,content,subject)
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


export const getNotes = async(req:Request,res:Response)=>{
   try{
     const notes=  await Note.find();
     res.json(notes);
      

   }catch(error){
      res.status(500).json({message:"error in fething notes"})
   }
}

export const deleteNote= async (req:Request,res:Response):Promise<void>=>{
   try{
     await Note.findByIdAndDelete(req.params.id)
      res.status(204).end()

   }catch(error){
        res.status(500).json({message:"Error in deleting note"})
   }
}

export const editNote= async(req:Request,res:Response):Promise<void>=>{
  try{
    const {title,content,subject} =req.body
    const updatedNote= await Note.findByIdAndUpdate(
      req.params.id,
      {title,content,subject},
      {new:true,runValidators:true}
    );
    if(!updatedNote){
        res.status(404).json({message:"Note not found"})
          return
       
    }
    res.status(200).json(updatedNote);

  }catch(error){
   res.status(500).json({message:"Error updating note"})
  }
}