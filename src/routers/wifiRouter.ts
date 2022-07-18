import { Router } from "express";

import * as middleware from "../middlewares/wifisMiddleware.js";
import * as controllers from "../controllers/wifisControllers.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const wifiRouter = Router();

wifiRouter.post('/wifis/create',
    tokenValidator,
    middleware.verifyWifi,
    controllers.newWifi
);

wifiRouter.get('/wifis',
    tokenValidator,
    controllers.getAllWifis
);

wifiRouter.get('/wifis/:id',
    tokenValidator,
    middleware.verifyId,
    controllers.getThisWifi
);

wifiRouter.delete('/wifis/:id', 
    tokenValidator,
    middleware.verifyId,
    controllers.deleteThisWifi
);

export default wifiRouter;