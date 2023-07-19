import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/gestor/embarques';

export default function EditEmbarque() {
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}/${id}`, {
            numero: numero,
            estado: estado
        })
        navigate('/embarques');
    }
    useEffect(() => {
        getEmbarqueById();
    },[])

    const getEmbarqueById = async () => {
        const res = await axios.get(`${URI}/${id}`);
        setNumero(res.data.numero);
        setEstado(res.data.estado);
    }

    return(
        <div className='container'>
            <h3 className='my-3'>Editar puerta de embarque</h3>
            <form onSubmit={update}>
                <div className='my-3'>
                    <label className='form-label'>Numero de la puerta de embarque</label>
                    <input
                        value={numero}
                        onChange={ (e) => setNumero(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Estado</label>
                    <select 
                        value={estado}
                        onChange={ (e) => setEstado(e.target.value)}
                        className='form-control'
                    >
                        <option value=""></option>
                        <option value="Disponible">Disponible</option>
                        <option value="Ocupado">Ocupado</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-success'>Actualizar</button>
            </form>
        </div>
    )
}
