import { Router } from "express";

import * as libroController from "../controllers/libro.controller";

import {
  validate,
  validateParams,
} from "../middlewares/validation.middleware";

import {
  createBookSchema,
  updateBookSchema,
  idParamSchema,
} from "../schemas/libro.schema";

import {
  authenticate,
  authorize,
} from "../middlewares/auth.middleware";

const router = Router();

// Lectura: PÚBLICA
router.get("/", libroController.getAll);

router.get(
  "/:id",
  validateParams(idParamSchema),
  libroController.getById
);

// Escritura: protegida (solo ADMIN)
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(createBookSchema),
  libroController.create
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  validate(updateBookSchema),
  libroController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  libroController.remove
);

export default router;