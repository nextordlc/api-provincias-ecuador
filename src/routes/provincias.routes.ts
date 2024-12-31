import { Router } from "express"
import { getCantonsByProvinceId, getProvinces, getProvincesById } from "../controllers/provincias.controller";

const router = Router();

router.get('/',getProvinces);
router.get('/:id',getProvincesById);
router.get('/:id/:value',getCantonsByProvinceId);

export { router };