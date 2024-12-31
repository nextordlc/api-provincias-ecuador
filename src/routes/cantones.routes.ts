import { Router } from "express";
import { getCantons, getCantonsById, getParishesByCantonId } from "../controllers/cantones.controller";

const router = Router();

router.get('/',getCantons);
router.get('/:id',getCantonsById);
router.get('/:id/:value',getParishesByCantonId);

export { router };