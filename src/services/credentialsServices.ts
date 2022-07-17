import { Credential } from "@prisma/client";
import cryptr from "../encryption/encryption.js";

import credentialsRepository from "../repositories/credentialsRepository.js";

export type NewCredential = Credential;

async function saveNewCredential(newCredential: NewCredential) {
    const alreadyExists = await credentialsRepository.getByIdAndTitle(newCredential.id, newCredential.title);

    if (alreadyExists) throw { type: "conflict" };

    newCredential.password = cryptr.encrypt(newCredential.password);

    await credentialsRepository.insert(newCredential);
}

async function getUsersCredentials(userId: number) {
    const credentials = await credentialsRepository.getAllByUser(userId);

    credentials.forEach(credential => credential.password = cryptr.decrypt(credential.password));

    return credentials;
}

async function getSingleCredential(id: number, userId: number) {
    const credential = await credentialsRepository.getById(id);

    if (!credential) throw { type: "not found" };
    if (credential.userId !== userId) throw { type: "unauthorized" };

    credential.password = cryptr.decrypt(credential.password);

    return credential;
}

const credentialsServices = {
    saveNewCredential,
    getUsersCredentials,
    getSingleCredential
}

export default credentialsServices;