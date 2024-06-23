import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, obtenerTarea } from "../controllers/task.controllers.js";
const router = Router()

router.get("/task", obtenerTarea)
router.post("/task", crearTarea);
router.patch("/task", actualizarTarea);
router.delete("/task", eliminarTarea);

export default router