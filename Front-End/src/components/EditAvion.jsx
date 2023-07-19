import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/gestor/vuelos';

export default function EditAvion() {
    const [numeroRegistro, setNumeroRegistro] = useState('');
    const [aerolinea, setAerolinea] = useState('');
    const [capacidadPasajeros, setCapacidadPasajeros] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}/${id}`, {
            numeroRegistro: numeroRegistro, 
            aerolinea: aerolinea, 
            capacidadPasajeros: capacidadPasajeros, 
            estado: estado
        })
        navigate('/vuelos');
    }
    useEffect(() => {
        getAvionById();
    },[])

    const getAvionById = async () => {
        const res = await axios.get(`${URI}/${id}`);
        setNumeroRegistro(res.data.numeroRegistro);
        setAerolinea(res.data.aerolinea);
        setCapacidadPasajeros(res.data.capacidadPasajeros);
        setEstado(res.data.estado);
    }

    return(
        <div className="container">
            <h3>Editar avion</h3>
            <form onSubmit={update}>
            <div className='my-3'>
                    <label className='form-label'>Numero del registro</label>
                    <input
                        value={numeroRegistro}
                        onChange={ (e) => setNumeroRegistro(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Aerolinea</label>
                    <select 
                        value={aerolinea}
                        onChange={ (e) => setAerolinea(e.target.value)}
                        className='form-control'
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
                    >
                        <option value=""></option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Vuelo">Vuelo</option>
                        <option value="Disponible">Disponible</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-success'>Actualizar</button>
            </form>
        </div>
    )
}
