import { Request, Response } from "express";

const message_no_load = 'El servicio está conectado pero no se ha cargado correctamente';

const loadService = (_req:Request, res:Response) =>{
    try {
        res.send("El servicio está conectado y funcionando correctamente");
    } catch (error) {
        res.status(404).send(message_no_load)        
    }
};

const loadServiceApi = (req:Request, res:Response) =>{
    try {
        const { anyvalue } = req.params;
        if( anyvalue === undefined ){
            res.status(404).send("Error");
        } else if(anyvalue.toString() === "api"){
            res.json({
                message:"Bienvenido a API REST ECUADOR, este servicio fue desarrollado para listar provincias, cantones y parroquias del país de Ecuador, su uso es libre",
                details:"Para más detalles de la configuración y uso de esta API REST dirigase a la página: **Ingrese link**",
                licence:"Apache License 2.0"
            })
        } else {
            res.send(`Esta ruta no está específicada en este servicio: ${anyvalue}`);
        }
    } catch (error) {
        res.status(404).send(message_no_load)        
    }
};

export { loadService, loadServiceApi };