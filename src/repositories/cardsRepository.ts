import { prisma } from "../database/db.js";
import { NewCard } from "../services/cardsService.js";

async function getByUserIdAndTitle(userId: number, title: string) {
    return await prisma.card.findFirst({ where: { title, userId } });
}

async function insert(data: NewCard) {
    await prisma.card.create({ data: data });
}

async function getAllByUser(userId: number) {
    return await prisma.card.findMany({ where: { userId } });
}

async function getById(id: number) {
    return await prisma.card.findFirst({ where: { id } });
}

async function deleteById(id: number) {
    await prisma.card.delete({ where: { id } });
}

const cardsRepository = {
    getByUserIdAndTitle,
    getById,
    insert,
    getAllByUser,
    deleteById
};

export default cardsRepository;