import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bar fixed-top">
                <Link to="/" className="navbar-brand ms-3 fs-3">Svaadisht</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className='bx bx-menu'></i>
                </button>
                <div className="collapse navbar-collapse bgcol" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link mx-3 fs-5">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuisines" className="nav-link mx-3 fs-5">Cuisines</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chefs" className="nav-link mx-3 fs-5">Chefs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link mx-3 fs-5">About us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar