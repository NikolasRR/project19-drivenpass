import { Request, Response } from "express";

import { TokenUser } from "../middlewares/tokenValidator.js";
import wifisServices, { Wifi } from "../services/wifisServices.js";

export async function newWifi(req: Request, res: Response) {
    const wifi: Wifi = req.body;
    
    const user = res.locals.user;
    wifi.userId = user.id;

    await wifisServices.saveNewWifi(wifi);
    
    res.sendStatus(201);
}

export async function getAllWifis(req: Request, res: Response) {
    const userId: number  = res.locals.user.id;

    const wifis = await wifisServices.getUsersWifis(userId);

    res.send(wifis);
}

export async function getThisWifi(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    const wifi = await wifisServices.getSingleWifi(id, user.id);

    res.send(wifi);
}

export async function deleteThisWifi(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    await wifisServices.deleteWifi(id, user.id);

    res.sendStatus(200);
}