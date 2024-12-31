import { Request, Response } from "express";
import { badRequest, handleHttp } from "../utils/error.handle";
import { provinceService } from "../services/provinces.service";
import { cantonService } from "../services/cantons.service";

const getProvinces = async (_req:Request, res:Response) =>{
    try {
        const resp = await provinceService.getListProvinces();
        if(resp==null){
            res.status(404).json({message:"No se pudo listar las provincias"});
        } else {
            res.json(resp);
        }
    } catch (error) {
        console.log(error);
        handleHttp(res,'ERROR_GET_PROVINCES');
    }

};

const getProvincesById = async (req:Request, res:Response) =>{
    try {
        const { id } = req.params;
        if( id ===undefined ){
            badRequest(res);
        } 
        const resp = await provinceService.getListProvincesById(id);
        if(resp==null){
            res.status(404).json({message:`No se encontró la provincia específicada: ${id}`});
        } else {
            res.json(resp);
        }
    } catch (error) {
        handleHttp(res,'ERROR_GET_PROVINCES_BY_ID');
    }
};

const getCantonsByProvinceId = async (req:Request, res:Response) =>{
    try {
        const { id } = req.params;
        const { value } = req.params;

        if( id === undefined ||
            value === undefined
        ){
            badRequest(res);
        }

        if (value !== "cantones"){
            res.status(404).json({message:"Para consultar la lista de cantones de una provincia despúes del código de la provincia ingrese '/cantones/'"});
        } else {
            const resp = await cantonService.getCantonsByProvId(id);
            if(resp==null){
                res.status(404).json({message:`No se encontraron resultados para el código de esta provincia: ${id}`});
            } else {
                res.json(resp);
            }
        }
    } catch (error) {
        handleHttp(res,'ERROR_GET_CANTONS_BY_PROVINCE');
    }
};

export { getProvinces, getProvincesById , getCantonsByProvinceId};