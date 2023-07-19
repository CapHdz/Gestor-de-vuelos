import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/gestor/embarques';

export default function CreateEmbarque() {
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();

    const store = async(e) => {
        e.preventDefault();
        axios.post(URI, {numero: numero, estado: estado});
        navigate('/embarques');
    }

    return(
        <div className='container'>
            <h3 className='my-3'>Crear puerta de embarque</h3>
            <form onSubmit={store}>
                <div className='my-3'>
                    <label className='form-label'>Numero de la puerta de embarque</label>
                    <input
                        value={numero}
                        onChange={ (e) => setNumero(e.target.value)}
                        type='text'
                        className='form-control'
                        required
                    />
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
                        <option value="Disponible">Disponible</option>
                        <option value="Ocupado">Ocupado</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
    )
}
