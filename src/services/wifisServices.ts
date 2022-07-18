import { WifiInfo } from "@prisma/client";

import cryptr from "../encryption/encryption.js";
import wifisRepository from "../repositories/wifisRepository.js";
import wifisUtils from "../utils/wifisUtils.js";

export type Wifi = WifiInfo;

async function saveNewWifi(wifi: Wifi) {
    wifi.password = cryptr.encrypt(wifi.password);

    await wifisRepository.create(wifi);
}

async function getUsersWifis(userId: number) {
    const credentials = await wifisRepository.getAllByUser(userId);

    credentials.forEach(credential => credential.password = cryptr.decrypt(credential.password));

    return credentials;
}

async function getSingleWifi(id: number, userId: number) {
    const credential = await wifisRepository.getById(id);

    await wifisUtils.verifyExistenceAndOwner(credential, userId);

    credential.password = cryptr.decrypt(credential.password);

    return credential;
}

async function deleteWifi(id: number, userId: number) {
    const credential = await wifisRepository.getById(id);

    await wifisUtils.verifyExistenceAndOwner(credential, userId);

    await wifisRepository.deleteById(id);
}

const wifisServices = {
    saveNewWifi,
    getUsersWifis,
    getSingleWifi,
    deleteWifi
}

export default wifisServices;