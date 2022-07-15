import { Request, Response, NextFunction } from "express"; 7

type error = {
    type: string
};

export default async function errorHandler(error: error, req: Request, res: Response, next: NextFunction) {
    let code;
    switch (error.type) {
        case "conflict":
            code = 409;
            break;

        case "request format":
            code = 422;
            break;

        case "unauthorized":
            code = 401;
            break;

        default:
            break;
    }

    res.sendStatus(code);
}