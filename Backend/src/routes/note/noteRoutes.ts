import express from "express"
import { addNote, deleteNote, editNote, getNotes } from "../../controllers/notes/addNotes.js"
const router=express.Router()


router.get("/",getNotes);
router.post("/", addNote)
router.put("/edit/:id",editNote)
router.delete("/delete/:id", deleteNote)

export default router