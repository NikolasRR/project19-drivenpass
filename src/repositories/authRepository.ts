import { prisma } from "../database/db.js";

import { NewUserData } from "../services/authServices.js";

async function getByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
}

async function create(newUserData: NewUserData) {
    await prisma.user.create({data: newUserData});
}

export const authRepository = {
    getByEmail,
    create
}