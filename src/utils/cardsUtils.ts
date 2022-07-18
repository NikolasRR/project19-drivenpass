import { Card } from "@prisma/client";

async function verifyExistenceAndOwner(credential: Card, userId: number) {
    if (!credential) throw { type: "not found" };
    if (credential.userId !== userId) throw { type: "unauthorized" };
}

const cardsUtils = {
    verifyExistenceAndOwner
};

export default cardsUtils;