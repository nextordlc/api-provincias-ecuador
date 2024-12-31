import { Response } from "express";

const serviceNotImplemented = (res:Response) => {
    return res.status(404).json({message:"Esté metodo no está implementado por cuestiones de rendimiento"})
}

const badRequest = (res: Response) => {
    return res.status(400).json({ message: "Bad Request. Please fill all field." });
}

const handleHttp = (res:Response, error:any) =>{
    res.status(500);
    res.send({ error });
}

export { handleHttp , badRequest , serviceNotImplemented};