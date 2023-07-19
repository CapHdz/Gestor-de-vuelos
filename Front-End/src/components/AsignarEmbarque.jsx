import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react'

const URIE = 'http://localhost:8000/gestor/embarques';
const URIA = 'http://localhost:8000/gestor/vuelos';

export default function AsignarEmbarque() {
    const [numeroRegistro, setNumeroRegistro] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const alojar = async (e) => {
        e.preventDefault();
        await axios.put(`${URIA}/${id}`, {
            estado: estado
        })
        navigate('/vuelos');
    }
    useEffect(() => {
        getAvionById();
    },[])

    const getAvionById = async () => {
        const res = await axios.get(`${URIA}/${id}`);
        setNumeroRegistro(res.data.numeroRegistro);
        setEstado(res.data.estado);
    }

    const [embarques, setEmbarques] = useState([]);
    useEffect( () => {
        getEmbarques()
    },[]);

    const getEmbarques = async () => {
        const res = await axios.get(URIE);
        setEmbarques(res.data);
    };
    return (
        <div className="container">
            <h1 className='my-3'>Seleciona una puerta de embarque para el avion {numeroRegistro}</h1>
            <form onSubmit={alojar}>
            <div className='my-3'>
                    <label className='form-label'>Lista de puertas de embarque</label>
                    <select 
                            value={estado}
                            onChange={ (e) => setEstado(e.target.value)}
                            className='form-control'
                            required
                        >
                        {embarques.map ( (embarque, index) =>(
                            
                            <option key={index} value={embarque.numero}>{embarque.numero}</option>
                        ))}
                    </select>
                </div>
            <button type='submit' className='btn btn-success'>Alojar avion</button>
            </form>
        </div>
    )
}
