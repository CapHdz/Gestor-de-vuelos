// importamos el modelo del avion
import AvionModel from "../models/AvionModel.js";

// Metodos para el CRUD

// Mostrar todos los aviones

export const getAllAviones = async (req, res)=>{
    try {
        const aviones = await AvionModel.find();
        res.status(200).json(aviones);
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar un avion

export const getAvion = async (req, res)=>{
    try {
        const id = req.params.id;
        await AvionModel.findById({_id:id}).then((avion) => {
            res.status(200).json(avion);
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// Crear un nuevo avion

export const createAvion = async (req, res)=>{
    try {
        await AvionModel.create(req.body)
        res.status(200).json({
            "message":"Avion creado correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// Actualizar un avion

export const updateAvion = async (req, res)=>{
    try {
        const id = req.params.id;
        await AvionModel.updateOne({_id:id}, req.body).then(res =>{
            console.log(res);
        })
        res.status(200).json({
            "message":"Avion actualizado correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// Elimimar un avion

export const deleteAvion = async (req, res)=>{
    try {
        const id = req.params.id;
        await AvionModel.deleteOne({ _id: id}).then( res => {
            console.log(res);
        })
        res.status(200).json({
            "message":"Avion eliminado correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}