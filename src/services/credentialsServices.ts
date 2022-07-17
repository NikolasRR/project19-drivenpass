import { Credential } from "@prisma/client";
import cryptr from "../encryption/encryption.js";

import credentialsRepository from "../repositories/credentialsRepository.js";
import credentialUtils from "../utils/credentialsUtils.js";

export type NewCredential = Credential;

async function saveNewCredential(newCredential: NewCredential) {
    const alreadyExists = await credentialsRepository.getByUserIdAndTitle(newCredential.userId, newCredential.title);

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

    await credentialUtils.verifyExistenceAndOwner(credential, userId);

    credential.password = cryptr.decrypt(credential.password);

    return credential;
}

async function deleteCredential(id: number, userId: number) {
    const credential = await credentialsRepository.getById(id);

    await credentialUtils.verifyExistenceAndOwner(credential, userId);

    await credentialsRepository.deleteById(id);
}

const credentialsServices = {
    saveNewCredential,
    getUsersCredentials,
    getSingleCredential,
    deleteCredential
}

export default credentialsServices;