import { Wifi } from "../services/wifisServices.js";

async function verifyExistenceAndOwner(note: Wifi, userId: number) {
    if (!note) throw {type: "not found"};
    if (note.userId !== userId) throw {type: "unauthorized"};
}

const wifisUtils = {
    verifyExistenceAndOwner
};

export default wifisUtils;