import Note from "../../models/Note.js";
import { Request, Response } from "express";

export const addNote = async (req: Request, res: Response) => {
    try {
        const { title, content, subject } = req.body;
        const newNote = new Note({ title, content, subject });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }
    catch (error) {
        res.status(500).json({ message: "Error saving note" });
    }
};

export const getNotes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    }
    catch (error) {
        res.status(500).json({ message: "error in fetching notes" });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ message: "Error in deleting note" });
    }
};

export const editNote = async (req: Request, res: Response) => {
    try {
        const { title, content, subject } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content, subject },
            { new: true, runValidators: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating note" });
    }
};

export const getEditNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const editNote = await Note.findById(id);
        if (!editNote)
            return res.status(404).json({ success: false, message: "Note not found" });
        res.status(200).json({ success: true, message: "Note fetched successfully", note: editNote });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error in fetching note" });
    }
};
