import { Router } from "express";
import { getParishes, getParishesById } from "../controllers/parroquias.controller";

const router = Router();

router.get('/',getParishes);
router.get('/:id',getParishesById);

export { router };