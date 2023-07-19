import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import gestorRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/gestor', gestorRoutes);

app.get('/', (req, res) => {
    res.send('Servidor en linea');
})

app.listen(8000, () =>{
    console.log('Server UP running in http://localhost:8000/');
});