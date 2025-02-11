// Inicialización del servidor

// Import 
import express from "express"
import { connectDB } from "./config/connectDB.js";
import { procerRouter } from "./routes/procerRouter.js";

// Acceder a variables de entorno
process.loadEnvFile();
const PORT = process.env.PORT;

// Creación del servidor
const app = express();
app.use(express.json());

// Uso de Router 
app.use("/api/proceres", procerRouter);

// Ejecución del servidor
app.listen(PORT, () => {
    console.log("Servidor en el puerto " + PORT)
    connectDB();
});


