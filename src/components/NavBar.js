import { React, useState, useEffect } from 'react';
import logo from '../assets/images/porsche.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../app/CartContext';
import { useContext } from 'react';
import { getDocuments } from '../app/FirebaseCalls';  

const NavBar = () => {

  const { countItems } = useContext(CartContext);
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    const cats = await getDocuments('categorias');
    setCategorias(cats);
  }
 
  useEffect(() => {
    return () => {
      getCategorias();
    };
  }, [])

  return (
    <nav className="nav">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <h1>Autopartes Borrelli</h1>
        <ul className="navCategorias">
          {
            categorias.map((categoria, i) => <Link className="linkCategorias" key={i} to={ categoria.numero == 0 ? `/` : `/categoria/${categoria.numero}`}>{categoria.titulo}</Link>)
          }
        </ul>
        <div className="cartWidgetContainer">
        {
          countItems() > 0 && <CartWidget />
        }
        </div>
    </nav>
  )
}

export default NavBar