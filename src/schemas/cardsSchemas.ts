import Joi from "joi";

import { Card } from "@prisma/client";

export const creationSchema = Joi.object<Card>({
    title: Joi.string().required(),
    securityCode: Joi.string().regex(/^[0-9]{3}$/).required(),
    number: Joi.string().pattern(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/).required(),
    type: Joi.string().valid("credit", "debit", "both").required(),
    isVirtual: Joi.boolean().required(),
    expirationDate: Joi.date().required(),
    password: Joi.string().required(),
    nameOnCard: Joi.string().required()
});