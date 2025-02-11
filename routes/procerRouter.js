// Router MVC

// Import 
import { Router } from "express";
import { getAllProcers, getProcerById, addProcer, updateProcer, deleteProcer } from "../controllers/procersControllers.js";

// Ejecución función Router
const procerRouter = Router();

// Obtener todos los próceres
procerRouter.get("/", getAllProcers);

// Obtener un prócer mediante su id
procerRouter.get("/:id", getProcerById);

// Agregar un nuevo prócer
procerRouter.post("/", addProcer);

// Actualizar un prócer
procerRouter.patch("/:id", updateProcer);

// Borrar un prócer
procerRouter.delete("/:id", deleteProcer);

// Export 
export { procerRouter };

