import { Request, Response } from "express";

import { authService, NewUserData } from "../services/authServices.js";

export async function signUp(req: Request, res: Response) {
    const newUser: NewUserData = req.body;

    await authService.createNewUser(newUser);

    res.sendStatus(201);
}