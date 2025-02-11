// Modelo MVC

// Import
import mongoose from "mongoose";

// Acceder a variables de entorno
process.loadEnvFile();

// Esquema para hacer el modelo de prócer
const procerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        
        alias: {
            type: String,
            required: true,
            trim: true,
        },

        birth_date: {
            type: Date,
            required: true,
            trim: true,
        },

        death_date: {
            type: Date,
            required: true,
            trim: true,
        },

        nacionality: {
            type: String,
            required: true,
            trim: true,
        },

        occupation: {
            type: String,
            required: true,
            trim: true,
        },

        historical_events: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
    }
);

// Creación del modelo de prócer
const Procer = mongoose.model("Procer",procerSchema);

export { Procer };