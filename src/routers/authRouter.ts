import { Router } from "express";

import * as controllers from "../controllers/authControllers.js";
import * as middlewares from "../middlewares/authMiddlewares.js"

const authRouter = Router();

authRouter.post('/sign-up', middlewares.validateEmailAndPassword, controllers.signUp);

export default authRouter;