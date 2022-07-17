import { Request, Response, NextFunction } from "express"; 7

type error = {
    type: string,
    details: string
};

export default async function errorHandler(error: error, req: Request, res: Response, next: NextFunction) {
    let code: number;
    
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
        case "not found":
            code = 404;
            break;
        default:
            code = 500;
            break;
    }
    
    res.status(code).send(error.details);
}