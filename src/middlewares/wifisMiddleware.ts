import { Request, Response, NextFunction } from "express";

import { creationSchema } from "../schemas/wifiSchemas.js";

export async function verifyWifi(req: Request, res: Response, next: NextFunction) {
    const validation = creationSchema.validate(req.body, { abortEarly: false });
    if (validation.error) throw { type: "request format" };

    next();
}

export async function verifyId(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    if (!id) throw { type: "request format" }

    res.locals.id = id;

    next();
}