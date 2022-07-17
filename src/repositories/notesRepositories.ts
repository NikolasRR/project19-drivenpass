import { prisma } from "../database/db.js";

import { NewNote } from "../services/notesServices.js"

async function create(note: NewNote) {
    await prisma.secureNote.create({ data: note });
}

async function getByIdAndTitle(id: number, title: string) {
    return await prisma.secureNote.findFirst({ where: { id, title } });
}

const notesRepository = {
    create,
    getByIdAndTitle
};

export default notesRepository;