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

notesRouter.get('/notes', 
    tokenValidator,
    controllers.getAllNotes
);

notesRouter.get('/notes/:id',
    tokenValidator,
    middleware.verifyId,
    controllers.getThisNote
);

notesRouter.delete('/notes/:id',
    tokenValidator,
    middleware.verifyId,
    controllers.deleteThisNote
);

export default notesRouter;