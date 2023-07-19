import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/gestor/vuelos';

export default function ShowAviones() {
    const [aviones, setAviones] = useState([]);
    useEffect( () => {
        getAviones()
    },[]);

    // Mostrar todos los aviones

    const getAviones = async () => {
        const res = await axios.get(URI);
        setAviones(res.data);
    };

    // Borrar un avion

    const deleteAvion = async (id) => {
        await axios.delete(`${URI}/${id}`);
        getAviones();
    };
    return (
        <div className='container'>
            <h1 className='text-center my-3 color-main'>Aviones</h1>
            <div className='row'>
                <div className='col'>
                    <div className='overflow-auto'>
                        <table className='table table-hover'>
                            <thead >
                                <tr>
                                    <th>Numero de registro</th>
                                    <th>Aerolinea</th>
                                    <th>Capacidad</th>
                                    <th>Estado</th>
                                    <th className='text-center'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aviones.map ( (avion, index) =>(
                                    <tr key={index}>
                                        <td><i className="fa-solid fa-plane-up fs-4"></i> { avion.numeroRegistro }</td>
                                        <td>{ avion.aerolinea }</td>
                                        <td>{ avion.capacidadPasajeros }</td>
                                        <td>En: { avion.estado }</td>
                                        <td className='d-flex justify-content-evenly'>
                                            <Link to={`edit/${avion._id}`} className='btn btn-info' title='Editar'><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <Link to={`asignar/${avion._id}`} className='btn btn-primary' title='Asignar puerta de embarque'><i className="fa-solid fa-plus"></i></Link>
                                            <button onClick={ () => deleteAvion(avion._id)} className='btn btn-danger' title='Borrar'><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link className='btn my-2 bg-main rutas' to="/vuelos/create">Crear un avion nuevo <i className="fa-solid fa-plane-up"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
