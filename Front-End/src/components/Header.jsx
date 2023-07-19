import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../assets/css/styles.css';
import Home from './Home';
import ShowEmbarques from './ShowEmbarques';
import EditEmbarque from './EditEmbarque';
import CreateEmbarque from './CreateEmbarque';
import ShowAviones from './ShowAviones';
import EditAvion from './EditAvion';
import CreateAvion from './CreateAvion';
import AsignarAvion from './AsignarAvion';
import AsignarEmbarque from './AsignarEmbarque';

export default function Header() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-main" data-bs-theme="dark">
                <div className="container-fluid">
                    <h2 className='text-white'><i className="fa-solid fa-plane-departure fs-3"></i> Gestor de vuelos</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className='nav-link'>Inicio</Link>
                            <Link to="/embarques" className='nav-link'>Puertas de embarque</Link>
                            <Link to="/vuelos" className='nav-link'>Aviones</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/embarques' element={<ShowEmbarques />}/>
                <Route path='/embarques/edit/:id' element={<EditEmbarque />}/>
                <Route path='/embarques/create' element={<CreateEmbarque />}/>
                <Route path='/vuelos' element={<ShowAviones />}/>
                <Route path='/vuelos/edit/:id' element={<EditAvion />}/>
                <Route path='/vuelos/create' element={<CreateAvion />}/>
                <Route path='/embarques/asignar/:id' element={<AsignarAvion />}/>
                <Route path='/vuelos/asignar/:id' element={<AsignarEmbarque />}/>
            </Routes>
        </BrowserRouter>
    )
}