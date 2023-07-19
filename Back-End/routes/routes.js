import express from 'express';
import { getAllAviones, getAvion, createAvion, updateAvion, deleteAvion } from '../controllers/AvionesController.js';
import { getAllEmbarques, getEmbarque, createEmbarque ,updateEmbarque, deleteEmbarque } from '../controllers/EmbarquesController.js';
const router = express.Router();

// Rutas para el manejo de aviones

router.get('/vuelos/', getAllAviones);
router.get('/vuelos/:id', getAvion);
router.post('/vuelos/',createAvion);
router.put('/vuelos/:id', updateAvion);
router.delete('/vuelos/:id', deleteAvion);

// Rutas para el manejo de puertas de embarque

router.get('/embarques/', getAllEmbarques);
router.get('/embarques/:id', getEmbarque);
router.post('/embarques/',createEmbarque);
router.put('/embarques/:id', updateEmbarque);
router.delete('/embarques/:id', deleteEmbarque);

export default router;