// importamos el modelo de la puerta de embarque
import EmbarqueModel from "../models/EmbarqueModel.js";

// Metodos para el CRUD

// Mostrar todas las puertas de embarque

export const getAllEmbarques = async (req, res)=>{
    try {
        const embarques = await EmbarqueModel.find();
        res.status(200).json(embarques);
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar una puerta de embarque

export const getEmbarque = async (req, res)=>{
    try {
        const id = req.params.id;
        await EmbarqueModel.findById({_id:id}).then((embarque) => {
            res.status(200).json(embarque);
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// Crear una puerta de embarque nueva

export const createEmbarque = async (req, res)=>{
    try {
        await EmbarqueModel.create(req.body)
        res.status(200).json({
            "message":"Puerta de embarque creada correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// Actualizar una puerta de embarque

export const updateEmbarque = async (req, res)=>{
    try {
        const id = req.params.id;
        await EmbarqueModel.updateOne({_id:id}, req.body).then(res =>{
            console.log(res);
        })
        res.status(200).json({
            "message":"Puerta de embarque actualizada correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

// Elimimar un avion

export const deleteEmbarque = async (req, res)=>{
    try {
        const id = req.params.id;
        await EmbarqueModel.deleteOne({ _id: id}).then( res => {
            console.log(res);
        })
        res.status(200).json({
            "message":"Puerta de embarque eliminada correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
    }
}