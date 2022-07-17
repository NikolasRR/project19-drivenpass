import { Request, Response } from "express";

import { NewNote } from "../services/notesServices.js";
import { TokenUser } from "../middlewares/tokenValidator.js";
import notesServices from "../services/notesServices.js";

export async function createNote(req: Request, res: Response) {
    const note: NewNote = req.body;
    
    const user = res.locals.user;
    note.userId = user.id;

    await notesServices.createNewNote(note);
    
    res.sendStatus(201);
}

export async function getAllNotes(req: Request, res: Response) {
    const userId: number  = res.locals.user.id;

    const notes = await notesServices.getUsersNotes(userId);

    res.send(notes);
}

export async function getThisNote(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    const note = await notesServices.getSingleNote(id, user.id);

    res.send(note);
}

export async function deleteThisNote(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    await notesServices.deleteNote(id, user.id);

    res.sendStatus(200);
}