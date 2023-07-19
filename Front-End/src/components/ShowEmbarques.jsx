import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/gestor/embarques';

export default function ShowEmbarques() {
    const [embarques, setEmbarques] = useState([]);
    useEffect( () => {
        getEmbarques()
    },[]);

    // Mostrar todos las puertas de embarque

    const getEmbarques = async () => {
        const res = await axios.get(URI);
        setEmbarques(res.data);
    };

    // Borrar una puerta de embarque

    const deleteEmbarque = async (id) => {
        await axios.delete(`${URI}/${id}`);
        getEmbarques();
    };
    return (
        <div className='container'>
            <h1 className='text-center my-3 color-main'>Puertas de embarque</h1>
            <div className='row'>
                <div className='col'>
                <div className='overflow-auto'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th className='text-center'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {embarques.map ( (embarque, index) =>(
                                <tr key={index}>
                                    <td><i className="fa-solid fa-plane-departure fs-5"></i> { embarque.numero }</td>
                                    <td>Embarque: { embarque.estado }</td>
                                    <td className='d-flex justify-content-evenly'>
                                        <Link to={`edit/${embarque._id}`} className='btn btn-info' title='Editar'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <Link to={`asignar/${embarque._id}`} className='btn btn-primary' title='Asignar vuelo'><i className="fa-solid fa-plus"></i></Link>
                                        <button onClick={ () => deleteEmbarque(embarque._id)} className='btn btn-danger' title='Borrar'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center'>
                        <Link className='btn my-2 bg-main rutas' to="/embarques/create">Crear una nueva puerta de embarque <i className="fa-solid fa-plane-departure"></i></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
