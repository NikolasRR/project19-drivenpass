import { Request, Response } from "express";
import { TokenUser } from "../middlewares/tokenValidator.js";

import credentialsServices, { NewCredential } from "../services/credentialsServices.js";

export async function newCredential(req: Request, res: Response) {
    const credential: NewCredential = req.body;
    
    const user = res.locals.user;
    credential.userId = user.id;

    await credentialsServices.saveNewCredential(credential);
    
    res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
    const userId: number  = res.locals.user.id;

    const credentials = await credentialsServices.getUsersCredentials(userId);

    res.send(credentials);
}

export async function getThisCredential(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    const credential = await credentialsServices.getSingleCredential(id, user.id);

    res.send(credential);
}