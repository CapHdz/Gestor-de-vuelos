import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react'

const URIE = 'http://localhost:8000/gestor/embarques';
const URIA = 'http://localhost:8000/gestor/vuelos';

export default function AsignarAvion() {
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const alojar = async (e) => {
        e.preventDefault();
        await axios.put(`${URIE}/${id}`, {
            estado: estado
        })
        navigate('/embarques');
    }

    useEffect(() => {
        getEmbarqueById();
    },[])

    const getEmbarqueById = async () => {
        const res = await axios.get(`${URIE}/${id}`);
        setNumero(res.data.numero);
        setEstado(res.data.estado);
    }

    const [aviones, setAviones] = useState([]);
    useEffect( () => {
        getAviones()
    },[]);

    const getAviones = async () => {
        const res = await axios.get(URIA);
        setAviones(res.data);
    };
    return (
        <div className="container">
            <h1 className='my-3'>Seleciona un avion para alojar en la puerta de embarque {numero}</h1>
            <form onSubmit={alojar}>
            <div className='my-3'>
                    <label className='form-label'>Lista de aviones</label>
                    <select 
                            value={estado}
                            onChange={ (e) => setEstado(e.target.value)}
                            className='form-control'
                            required
                        >
                        {aviones.map ( (avion, index) =>(
                            
                            <option key={index} value={avion.numeroRegistro}>{avion.numeroRegistro}</option>
                        ))}
                    </select>
                </div>
            <button type='submit' className='btn btn-success'>Alojar avion</button>
            </form>
        </div>
    )
}

