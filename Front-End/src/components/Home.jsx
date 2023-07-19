import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='container'>
            <h1 className='text-center color-main mt-5'>Bienvenido al gestor de vuelos</h1>
            <h3 className='text-center color-main m-3'>Explora la pagina:</h3>
            <div className="d-flex justify-content-evenly ruta">
                <Link className='btn my-2 fs-3 bg-main rutas' to="/embarques"><i className="fa-solid fa-plane-departure"></i><br></br>Puertas de embarque</Link>
                <Link className='btn my-2 fs-3 bg-main rutas' to="/vuelos"><i className="fa-solid fa-plane-up"></i><br></br>Aviones</Link>
                <Link className='btn my-2 fs-3 bg-main rutas' to="/embarques/create"><i className="fa-solid fa-plane-departure"></i><br></br>Agrega una nueva puerta de embarque</Link>
                <Link className='btn my-2 fs-3 bg-main rutas' to="/vuelos/create"><i className="fa-solid fa-plane-up"></i><br></br>Agrega un nuevo avion</Link>
            </div>
        </div>
    )
}
