import { Router } from "express";

import * as middlewares from '../middlewares/cardsMiddleware.js';
import * as controllers from "../controllers/cardsControllers.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const cardsRouter = Router();

cardsRouter.post('/cards/create',
    tokenValidator,
    middlewares.verifyCardData,
    controllers.newCard
);
cardsRouter.get('/cards',
    tokenValidator,
    controllers.getAllCards
);
cardsRouter.get('/cards/:id', 
    tokenValidator,
    middlewares.verifyId,
    controllers.getThisCard
);
cardsRouter.delete('/cards/:id',
    tokenValidator,
    middlewares.verifyId,
    controllers.deleteThisCard
);

export default cardsRouter;