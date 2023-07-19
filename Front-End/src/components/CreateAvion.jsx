import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/gestor/vuelos';

export default function CreateAvion() {
    const [numeroRegistro, setNumeroRegistro] = useState('');
    const [aerolinea, setAerolinea] = useState('');
    const [capacidadPasajeros, setCapacidadPasajeros] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();

    const store = async(e) => {
        e.preventDefault();
        axios.post(URI, {numeroRegistro: numeroRegistro, aerolinea: aerolinea, capacidadPasajeros: capacidadPasajeros, estado: estado});
        navigate('/vuelos');
    }

    return(
        <div className='container'>
            <h3 className='my-3'>Crear avion</h3>
            <form onSubmit={store}>
                <div className='my-3'>
                    <label className='form-label'>Numero del registro</label>
                    <input
                        value={numeroRegistro}
                        onChange={ (e) => setNumeroRegistro(e.target.value)}
                        type='text'
                        className='form-control'
                        required
                    />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Aerolinea</label>
                    <select 
                        value={aerolinea}
                        onChange={ (e) => setAerolinea(e.target.value)}
                        className='form-control'
                        required
                    >
                        <option value=""></option>
                        <option value="Aerolinea 1">Aerolinea 1</option>
                        <option value="Aerolinea 2">Aerolinea 2</option>
                        <option value="Aerolinea 3">Aerolinea 3</option>
                        <option value="Aerolinea 4">Aerolinea 4</option>
                    </select>
                </div>
                <div className='my-3'>
                    <label className='form-label'>Capacidad de pasajeros</label>
                    <select 
                        value={capacidadPasajeros}
                        onChange={ (e) => setCapacidadPasajeros(e.target.value)}
                        className='form-control'
                        required
                    >
                        <option value=""></option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                        <option value="250">250</option>
                        <option value="300">300</option>
                    </select>
                </div>
                <div className='my-3'>
                    <label className='form-label'>Estado</label>
                    <select 
                        value={estado}
                        onChange={ (e) => setEstado(e.target.value)}
                        className='form-control'
                        required
                    >
                        <option value=""></option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="vuelo">Vuelo</option>
                        <option value="Disponible">Disponible</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
    )
}
