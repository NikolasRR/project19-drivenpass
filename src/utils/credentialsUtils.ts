import { Credential } from "@prisma/client";

async function verifyExistenceAndOwner(credential: Credential, userId: number) {
    if (!credential) throw { type: "not found" };
    if (credential.userId !== userId) throw { type: "unauthorized" };
}

const credentialUtils = {
    verifyExistenceAndOwner
};

export default credentialUtils;