import { Request, Response } from "express";
import { badRequest, handleHttp, serviceNotImplemented } from "../utils/error.handle";
import { parishesService } from "../services/parishes.service";

const getParishes = (_req:Request, res:Response) =>{
    try {
        serviceNotImplemented(res);
    } catch (error) {
        handleHttp(res,'ERROR_GET_PARISHES');
    }

};

const getParishesById = async (req:Request, res:Response) =>{
    try {
        const { id } = req.params;
        if( id ===undefined ){
            badRequest(res);
        }
        const resp = await parishesService.getListParishesById(id);
        if(resp==null){
            res.status(404).json({message:`No se encontró el cantón específicado: ${id}`});
        } else {
            res.json(resp);
        }
    } catch (error) {
        handleHttp(res,'ERROR_GET_PARISHES_BY_ID');
    }
};

export { getParishes, getParishesById };