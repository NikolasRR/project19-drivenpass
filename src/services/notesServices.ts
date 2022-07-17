import { SecureNote } from "@prisma/client";

import notesRepository from "../repositories/notesRepositories.js";
import notesUtils from "../utils/notesUtils.js";

export type NewNote = SecureNote;

async function createNewNote(note: NewNote) {
    const alreadyExists = await notesRepository.getByUserIdAndTitle(note.userId, note.title);

    if (alreadyExists) throw { type: "conflict" };

    await notesRepository.create(note);
}

async function getUsersNotes(userId: number) {
    const note = await notesRepository.getAllByUser(userId);

    return note;
}

async function getSingleNote(id: number, userId: number) {
    const credential = await notesRepository.getById(id);

    await notesUtils.verifyExistenceAndOwner(credential, userId);

    return credential;
}

async function deleteNote(id: number, userId: number) {
    
}

const notesServices = {
    createNewNote,
    getUsersNotes,
    getSingleNote,
    deleteNote
};

export default notesServices;