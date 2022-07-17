import { prisma } from "../database/db.js";

import { NewNote } from "../services/notesServices.js"

async function create(note: NewNote) {
    await prisma.secureNote.create({ data: note });
}

async function getByUserIdAndTitle(userId: number, title: string) {
    return await prisma.secureNote.findFirst({ where: { userId, title } });
}

async function getAllByUser(userId: number) {
    return await prisma.secureNote.findMany({ where: { userId } });
}

async function getById(id: number) {
    return await prisma.secureNote.findFirst({ where: { id } });
}

const notesRepository = {
    create,
    getByUserIdAndTitle,
    getAllByUser,
    getById
};

export default notesRepository;