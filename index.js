// Importación de módulos y configuración inicial
import express from "express";
import taskrouter from "./src/routes/task.routes.js";
import TareaEntidad from "./src/models/task.model.js";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app = express(); // Creación de la aplicación Express
const PORT = process.env.PORT; // Puerto obtenido desde las variables de entorno

// Función asincrónica para inicializar modelos de datos
async function iniciarModelos() {
  await TareaEntidad(); // Llama a la función para inicializar el modelo de tarea
}

// Middleware y configuraciones globales
app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes JSON
app.use("/api", taskrouter); // Rutas API definidas en task.routes.js


// Escucha del servidor en el puerto especificado
app.listen(PORT, async () => {
  await iniciarModelos(); // Inicializa los modelos de datos antes de escuchar las conexiones
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
