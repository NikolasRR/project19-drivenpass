import { prisma } from "../database/db.js";
import { Wifi } from "../services/wifisServices.js";

async function create(note: Wifi) {
    await prisma.wifiInfo.create({ data: note });
}

async function getAllByUser(userId: number) {
    return await prisma.wifiInfo.findMany({ where: { userId } });
}

async function getById(id: number) {
    return await prisma.wifiInfo.findFirst({ where: { id } });
}

async function deleteById(id: number) {
    await prisma.wifiInfo.delete({ where: { id } });
}

const wifisRepository = {
    create,
    getAllByUser,
    getById,
    deleteById
};

export default wifisRepository;