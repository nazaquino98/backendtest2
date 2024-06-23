import connectDb from "../config/db.js"

const TareaEntidad = async () => {
const connection = await connectDb(
)
const sql = ` 
    CREATE TABLE IF NOT EXISTS tareas (
      id INT AUTO_INCREMENT,
      name VARCHAR(100),
      description VARCHAR(100),
      PRIMARY KEY(id)
    )
  `;
  await connection.execute(sql)
  console.log("La tabla ha sido creada o ya existia")
}

export default TareaEntidad