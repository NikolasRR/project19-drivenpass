import Joi from "joi";

import { NewUserData } from "../services/authServices.js";

export const signUpSchema = Joi.object<NewUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});