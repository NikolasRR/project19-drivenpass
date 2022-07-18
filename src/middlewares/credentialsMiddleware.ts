import { NextFunction, Request, Response } from "express";

import { creationSchema } from "../schemas/credentialsSchema.js";

export async function verifyCredentialData(req: Request, res: Response, next: NextFunction) {
    const validation = creationSchema.validate(req.body, { abortEarly: false });
    if (validation.error) throw { type: "request format", message: validation.error };

    next();
}

export async function verifyId(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    if (!id) throw { type: "request format", details: "id" }

    res.locals.id = id;

    next();
}