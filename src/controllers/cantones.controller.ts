import { Request, Response } from "express";
import { badRequest, handleHttp, serviceNotImplemented } from "../utils/error.handle";
import { cantonService } from "../services/cantons.service";
import { parishesService } from "../services/parishes.service";

const getCantons = async (_req:Request, res:Response) =>{
    try {
        serviceNotImplemented(res);
    } catch (error) {
        handleHttp(res,'ERROR_GET_CANTONS');
    }
};

const getCantonsById = async (req:Request, res:Response) =>{
    try {
        const { id } = req.params;
        if( id ===undefined ){
            badRequest(res);
        }
        const resp = await cantonService.getListCantonsById(id);
        if(resp==null){
            res.status(404).json({message:`No se encontró el cantón específicado: ${id}`});
        } else {
            res.json(resp);
        }
    } catch (error) {
        handleHttp(res,'ERROR_GET_CANTONS_BY_ID');
    }
};

const getParishesByCantonId = async (req:Request, res:Response) =>{
    try {
        const { id } = req.params;
        const { value } = req.params;

        if( id === undefined ||
            value === undefined
        ){
            badRequest(res);
        }
        if (value !== "parroquias"){
            res.status(404).json({message:"Para consultar la lista de parroquias de un cantón despúes del código del cantón ingrese '/parroquias/'"});
        } else {
            const resp = await parishesService.getParishesByCantId(id);
            if(resp==null){
                res.status(404).json({message:`No se encontraron resultados para el código de esta provincia: ${id}`});
            } else {
                res.json(resp);
            }
        }
    } catch (error) {
        handleHttp(res,'ERROR_GET_PARISHES_BY_CANTON');
    }
};

export { getCantons, getCantonsById, getParishesByCantonId };