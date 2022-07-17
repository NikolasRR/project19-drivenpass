import Joi from "joi";
import { NewCredential } from "../services/credentialsServices";

export const creationSchema = Joi.object<NewCredential>({
    userName: Joi.string().required(),
    password: Joi.string().required(),
    url: Joi.string().uri().required(),
    title: Joi.string().required()
});