import { Request, Response, NextFunction } from "express";

type error = {
    type: string,
    details: string,
    message: string
};

export default async function errorHandler(error: error, req: Request, res: Response, next: NextFunction) {
    let code: number;
    
    switch (error.type) {
        case "conflict":
            code = 409;
            error.message = "title already is use";
            break;
        case "request format":
            code = 422;
            if (error.details === "token") error.message = "missing token";
            if (error.details === "jwt") error.message = "token invalid or expired";
            if (error.details === "id") error.message = "id missing or not valid";
            break;
        case "unauthorized":
            code = 401;
            error.message = "the information you're trying to access does not belong to you";
            break;
        case "not found":
            code = 404;
            error.message = "no results were found with the supplied id";
            break;
        default:
            code = 500;
            break;
    }
    
    res.status(code).send(error.message);
}