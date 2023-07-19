import mongoose from "mongoose";

const Schema = mongoose.Schema;

const embarqueSchema = new Schema({
    numero: {type:String},
    estado: {type:String}},
    {collection: 'embarques'}
);

export default mongoose.model('EmbarqueModel', embarqueSchema);