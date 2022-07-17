import { SecureNote } from "@prisma/client";
import notesRepository from "../repositories/notesRepositories.js";

export type NewNote = SecureNote;

async function createNewNote(note: NewNote) {
    const alreadyExists = await notesRepository.getByIdAndTitle(note.id, note.title);

    if (alreadyExists) throw { type: "conflict" };

    await notesRepository.create(note);
}

async function getUsersNote(userId: number) {
    
}

async function getSingleNote(id: number, userId: number) {
    
}

async function deleteNote(id: number, userId: number) {
    
}

const notesServices = {
    createNewNote
};

export default notesServices;