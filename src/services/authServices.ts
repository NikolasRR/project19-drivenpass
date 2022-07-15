import { User } from "@prisma/client";
import bcrypt from "bcrypt";

import { authRepository } from "../repositories/authRepository.js";

export type NewUserData = User;

async function createNewUser(newUserData: NewUserData) {
    const emailAlreadyRegistered = await authRepository.getByEmail(newUserData.email);
    if (emailAlreadyRegistered) throw { type: "conflict" }

    newUserData.password = bcrypt.hashSync(newUserData.password, 10);

    await authRepository.create(newUserData);
}

export const authService = {
    createNewUser
};