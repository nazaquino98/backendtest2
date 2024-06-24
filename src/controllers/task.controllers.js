import connectDb from "../config/db.js";

export async function obtenerUnaTarea(req, res){
const connection = await connectDb()
 const {id} = req.params
 console.log(id)
try {
  const sql = "SELECT * FROM `tareas` WHERE id = ?" ;
  const [rows]= await connection.execute(sql, [id])
  res.json(rows[0])
} catch (error) {
  console.error("error al obtener la tarea")
  res.status(500).send("error del servidor")
} finally{
  connection.end()
}
}

export async function obtenerTarea(req, res) {
  const connection = await connectDb(); // Obtener la conexión
  try {
    const sql = "SELECT * FROM `tareas`";
    const [rows, fields] = await connection.execute(sql); // Ejecutar la consulta

    // Procesar el resultado como sea necesario
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).send("Error interno del servidor");
  } finally {
    connection.end(); // Cerrar la conexión cuando ya no se necesite
  }
}

export async function crearTarea(req, res) {
  const connection = await connectDb();
  const {name, description}= req.body
  console.log(name, description);
  try {
    const sql = "INSERT INTO `tareas`(`name`, `description`) VALUES (?, ?)";
    const [rows, fields] = await connection.execute(sql, [name, description]);

    console.log("Tarea creada exitosamente");
    res.status(200).send("Tarea creada exitosamente");
  } catch (error) {
    console.error("error al crear las tareas", error);
    res.status(500).send("error del servidor");
  } finally {
    connection.end();
  }
}

export async function actualizarTarea(req, res) {
  const connection = await connectDb()
  const {id} = req.params
  const {name, description}= req.body

  try {
    const sql= "UPDATE `tareas` SET `name`= ?,`description`=? WHERE id = ?"
    const [rows]= await connection.execute(sql, [name, description,id])
    res.send("tarea actualizada")
  } catch (error) {
    console.error("error al actualizar")
    res.status(500).send("error del servidor")
  } finally{
    connection.end()
  }
}

export async function eliminarTarea(req, res) {
  const connection = await connectDb()
  const {id}= req.params
  
  try {
    const sql = "DELETE FROM `tareas` WHERE id = ?"
    const [rows]=await connection.execute(sql, [id])
    res.json({message:"Tarea Eliminada"})

  } catch (error) {
    console.error("error al eliminar la tarea")
    res.status(500).send("error del servidor")
  } finally{
    connection.end()
  }
}

//exportar las funciones logicas para cada metodo
