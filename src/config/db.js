import mysql from "mysql2/promise";

const connectDb = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
    });
    console.log("Conexión exitosa a la base de datos");
    return connection;
  } catch (error) {
    console.error("Error al conectar en la base de datos", error);
    process.exit(1);
  }
};

export default connectDb;
