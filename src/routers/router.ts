import { Router } from "express";

import authRouter from "./authRouter.js";
import cardsRouter from "./cardsRouter.js";
import credentialsRouter from "./credencialsRouter.js";
import notesRouter from "./notesRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(wifiRouter);
router.use(cardsRouter);

export default router;