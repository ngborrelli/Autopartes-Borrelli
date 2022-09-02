import React from 'react'
import estilos from '../assets/css/estilos.css';
import logo from '../assets/images/porsche.png';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo"></img>
        <h1>Autopartes Borrelli</h1>
        <ul className="menu">
            <li>
                <a href="#">Todo</a>
            </li>
            <li>
            <a href="#">Filtros</a>
            </li>
            <li>
                <a href="#">Frenos</a>
            </li>
            <li>
            <a href="#">Inyeccion</a>
            </li>
            <li>
            <a href="#">Suspension</a>
            </li>

        </ul>

        <button>Login</button>

        < CartWidget />
    </nav>
  )
}

export default NavBar