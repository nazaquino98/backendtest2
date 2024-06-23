import express from "express";
import router from "./src/routes/task.routes.js";
import connectDb from "./src/config/db.js";
import TareaEntidad from "./src/models/task.model.js";
const app = express();

const PORT = process.env.PORT;

async function iniciarModelos() {
  await TareaEntidad();
}

app.use("/api", router);

// app.get("/api", (req, res) =>{
//     res.send("obteniendo tarea")
// })

// app.post("/api", (req, res) =>{
//     res.send("creando tarea")
// })

// app.patch("/api", (req, res) =>{
//     res.send("actualizando tarea")
// })

// app.delete("/api", (req, res) =>{
//     res.send("borrando tarea")
// })

app.listen(PORT, async () => {
   await iniciarModelos()
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
