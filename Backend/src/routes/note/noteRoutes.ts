import express from "express"
import { Request, Response, RequestHandler } from "express";
import { addNote, deleteNote, editNote, getEditNote, getNotes } from "../../controllers/notes/addNotes.js"
const router=express.Router()


router.get("/",getNotes);
router.put("/edit/:id", editNote as RequestHandler);
router.get("/edit/:id", getEditNote as RequestHandler);
router.post("/add", addNote)

router.delete("/delete/:id", deleteNote)


export default router