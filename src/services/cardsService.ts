import { Card } from "@prisma/client";

import cryptr from "../encryption/encryption.js";
import cardsRepository from "../repositories/cardsRepository.js";
import cardsUtils from "../utils/cardsUtils.js";

export type NewCard = Card;

async function saveNewCard(newCard: NewCard) {
    const alreadyExists = await cardsRepository.getByUserIdAndTitle(newCard.userId, newCard.title);

    if (alreadyExists) throw { type: "conflict" };

    newCard.password = cryptr.encrypt(newCard.password);
    newCard.securityCode = cryptr.encrypt(newCard.securityCode);
    
    await cardsRepository.insert(newCard);
}

async function getUsersCards(userId: number) {
    const cards = await cardsRepository.getAllByUser(userId);

    cards.forEach(card => {
        card.password = cryptr.decrypt(card.password);
        card.securityCode = cryptr.decrypt(card.securityCode);
    });

    return cards;
}

async function getSingleCard(id: number, userId: number) {
    const card = await cardsRepository.getById(id);

    await cardsUtils.verifyExistenceAndOwner(card, userId);

    card.password = cryptr.decrypt(card.password);
    card.securityCode = cryptr.decrypt(card.securityCode);

    return card;
}

async function deleteCard(id: number, userId: number) {
    const card = await cardsRepository.getById(id);

    await cardsUtils.verifyExistenceAndOwner(card, userId);

    await cardsRepository.deleteById(id);
}

const cardsServices = {
    saveNewCard,
    getUsersCards,
    getSingleCard,
    deleteCard
};

export default cardsServices;