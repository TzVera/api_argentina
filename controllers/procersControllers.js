// Controlador MVC

// Import
import { Procer } from "../models/procerModel.js";

// Obtener todos los próceres
const getAllProcers = async (req,res) => {
    try {
        const procers = await Procer.find();
        res.json(procers);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al obtener los próceres"});
    }
};

// Obtener un prócer mediante su id
const getProcerById = async (req,res) => {
    try {
        const procer = await Procer.findById(req.params.id);
        
        if(!procer) {
            return res.status(404).json({message: "No se encontró el prócer"});
        }
    
        res.json(procer);
     
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al obtener el prócer", error: error.message});
    }
};

// Agregar un nuevo prócer
const addProcer = async (req,res) => {
    try {
        const {body} = req;
        
        if(!body.name || !body.alias || !body.birth_date || !body.death_date 
            || !body.nacionality || !body.occupation || !body.historical_events){
            return res.status(400).json({message: "Todos los campos son obligatorios"});
        }
            
        const newProcer = new Procer(body);
        await newProcer.save();

        return res.status(201).json({message: "Prócer agregado"});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al agregar el prócer", error: error.message});
    }
};

// Actualizar un prócer
const updateProcer = async (req,res) => {
    try {
        const updatedProcer = await Procer.findByIdAndUpdate(req.params.id, req.body , { new: true });
        
        if(!updatedProcer) {
            return res.status(404).json({message: "No se encontró el prócer"});
        }
        
        res.json({message: "Prócer actualizado", updatedProcer});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al actualizar el prócer", error: error.message});
    }
};

// Borrar un prócer
const deleteProcer = async (req,res) => {
    try {
        const deletedProcer = await Procer.findByIdAndDelete(req.params.id);

        if(!deletedProcer){
            return res.status(404).json({message: "No se encontró el prócer"});
        }
        
        res.json({ message: "Prócer eliminado"});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al eliminar el prócer", error: error.message});
    }
};

// Export
export { getAllProcers, getProcerById, addProcer, updateProcer, deleteProcer };
