import { prisma } from "../database/db.js";
import { NewCredential } from "../services/credentialsServices.js"

async function getByIdAndTitle(userId: number, title: string) {
    return await prisma.credential.findFirst({ where: { title, userId } });
}

async function insert(data: NewCredential) {
    await prisma.credential.create({ data: data });
}

async function getAllByUser(userId: number) {
    return await prisma.credential.findMany({ where: { userId } })
}

async function getById(id: number) {
    return await prisma.credential.findFirst({ where: { id } })
}

const credentialsRepository = {
    getByIdAndTitle,
    insert,
    getAllByUser,
    getById
}

export default credentialsRepository;