// Conexión a la base de datos

// Import
import mongoose from "mongoose";

// Acceder a variables de entorno
process.loadEnvFile();
const URI_DB = process.env.URI_DB;

// Función para conexión a la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB);
        console.log ("Se ha conectado a la base de datos con éxito");
    } catch (error) {
        console.error(error);
    }
};

// Export
export { connectDB }
