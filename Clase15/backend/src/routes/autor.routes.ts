import { Router } from "express";
import * as autorController from "../controllers/autor.controller";

const router = Router();

// Definimos qué verbo HTTP hace cada cosa en esta ruta
router.get("/", autorController.getAll);
router.get("/:id", autorController.getById);
router.post("/", autorController.create);
router.put("/:id", autorController.update);
router.delete("/:id", autorController.remove);

export default router;