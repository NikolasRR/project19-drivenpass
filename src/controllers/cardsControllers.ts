import { Request, Response } from "express";
import { TokenUser } from "../middlewares/tokenValidator.js";

import cardsServices, { NewCard } from "../services/cardsService.js";

export async function newCard(req: Request, res: Response) {
    const card: NewCard = req.body;
    
    const user = res.locals.user;
    card.userId = user.id;

    await cardsServices.saveNewCard(card);
    
    res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
    const userId: number  = res.locals.user.id;

    const card = await cardsServices.getUsersCards(userId);

    res.send(card);
}

export async function getThisCard(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    const card = await cardsServices.getSingleCard(id, user.id);

    res.send(card);
}

export async function deleteThisCard(req: Request, res: Response) {
    const id: number = res.locals.id;
    const user: TokenUser = res.locals.user;

    await cardsServices.deleteCard(id, user.id);

    res.sendStatus(200);
}