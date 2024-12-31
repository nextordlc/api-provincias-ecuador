import { Router } from "express";
import { readdirSync } from "fs";
import { loadService, loadServiceApi } from "../controllers/index.controller";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename:string) =>{
    const file = `${filename.split('.').shift()}`;
    return file;
};

router.get('/',loadService);

router.get('/:anyvalue',loadServiceApi);

readdirSync(PATH_ROUTER).filter(
    filename=>{
        const cleanName = cleanFileName(filename);
        if(cleanName !== 'index' ){
            import(`./${cleanName}.routes`).then(
                mRouter=>{
                    router.use(`/api/${cleanName}`,mRouter.router);
                }
            );
        }
    }
)

export { router };