import { Router } from "express";

import * as autorController from "../controllers/autor.controller";

import {
  validate,
  validateParams,
} from "../middlewares/validation.middleware";

import {
  autorCreateSchema,
  autorUpdateSchema,
  idParamSchema,
} from "../schemas/autor.schema";

import {
  authenticate,
  authorize,
} from "../middlewares/auth.middleware";

const router = Router();

// Lectura: PÚBLICA
router.get("/", autorController.getAll);

router.get(
  "/:id",
  validateParams(idParamSchema),
  autorController.getById
);

// Escritura: protegida (solo ADMIN)
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(autorCreateSchema),
  autorController.create
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  validate(autorUpdateSchema),
  autorController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  autorController.remove
);

export default router;