import { Router } from "express";

import * as controllers from "../controllers/credentialsControllers.js";
import * as middlewares from "../middlewares/credentialsMiddleware.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const credentialsRouter = Router();

credentialsRouter.post('/credentials/create',
    tokenValidator,
    middlewares.verifyCredentialData,
    controllers.newCredential
);

credentialsRouter.get('/credentials', 
    tokenValidator,
    controllers.getAllCredentials
);

credentialsRouter.get('/credentials/:id', 
    tokenValidator,
    middlewares.verifyId, 
    controllers.getThisCredential
);

export default credentialsRouter;