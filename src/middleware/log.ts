import { NextFunction, Request, Response } from "express";

const checkCountry = (_:Request, res:Response, next: NextFunction)=>{
    try {
        next();        
    } catch (error) {
        res.status(400).send("sorry, this feature is not available for your country")        
    };
};

export { checkCountry };