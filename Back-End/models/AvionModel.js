import mongoose from "mongoose";

const Schema = mongoose.Schema;

const avionSchema = new Schema({
    numeroRegistro: {type:String},
    aerolinea: {type:String},
    capacidadPasajeros: {type:String},
    estado: {type:String}},
    {collection: 'vuelos'}
);

export default mongoose.model('AvionModel', avionSchema);