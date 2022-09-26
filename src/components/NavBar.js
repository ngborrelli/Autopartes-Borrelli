import { React, useState, useEffect } from 'react';
import logo from '../assets/images/porsche.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { getCategorias } from './ApiCalls';
import { CartContext } from '../app/CartContext';
import { useContext } from 'react';

const NavBar = () => {

  useEffect(() => {
    getCategorias().then((data) => {
        setCategorias(data);
    })
});

const { items, addItem, removeItem, clearItems, countItems } = useContext(CartContext);
const [categorias, setCategorias] = useState([]);

  return (
    <nav className="nav">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <h1>Autopartes Borrelli</h1>
        <ul className="menu">
          {
            categorias.map((categoria, i) => <Link className="linkCategorias" key={i} to={`/categoria/${categoria}`}>{categoria}</Link>)
          }
        </ul>
        {
          countItems() > 0 && <CartWidget />
        }
    </nav>
  )
}

export default NavBar