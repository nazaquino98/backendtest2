import express from "express"
import { actualizarTarea, crearTarea, eliminarTarea, obtenerTarea, obtenerUnaTarea } from "../controllers/task.controllers.js";
const router = express.Router()

router.get("/task", obtenerTarea)
router.get("/task/:id", obtenerUnaTarea)
router.post("/task", crearTarea);
router.patch("/task/:id", actualizarTarea);
router.delete("/task/:id", eliminarTarea);

export default router

//importar el paquete Router de express
//importar las funciones logicas de cada metodo del archivo controllers
//definir una constante router
//