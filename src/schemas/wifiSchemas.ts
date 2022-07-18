import Joi from "joi";
import { Wifi } from "../services/wifisServices.js";

export const creationSchema = Joi.object<Wifi>({
    password: Joi.string().required(),
    title: Joi.string().required(),
    wifi: Joi.string().required()
});