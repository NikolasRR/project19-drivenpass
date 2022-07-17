import Joi from "joi";

import { NewNote } from "../services/notesServices.js";

export const creationSchema = Joi.object<NewNote>({
    title: Joi.string().max(50).required(),
    text: Joi.string().max(1000).required()
});