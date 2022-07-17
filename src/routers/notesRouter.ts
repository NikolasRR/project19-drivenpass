import { Router } from "express";

import * as middleware from "../middlewares/notesMiddleware.js";
import * as controllers from "../controllers/notesControllers.js"
import tokenValidator from "../middlewares/tokenValidator.js";

const notesRouter = Router();

notesRouter.post('/notes/create', 
    tokenValidator, 
    middleware.verifyNote, 
    controllers.createNote
);
notesRouter.get('/notes');
notesRouter.get('/notes/:id');
notesRouter.delete('/notes/:id');

export default notesRouter;