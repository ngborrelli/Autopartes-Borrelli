import React from 'react'
import ItemCount from './ItemCount';
import imagen from '../assets/images/2_1.jpg';
import { Link } from 'react-router-dom';

const Item = (prop) => {

  return (
    <article className="articulo">
        <div>
            <img src={imagen} />
        </div>
        <div className="datosArticulo">
            <div className="titulo">
                <Link className="linkTitulo" to={`/articulo/${prop.id}`}>{prop.titulo}</Link>
            </div>
            
            <div className="numeroParte">
                <span>Numero de parte: </span>{prop.id}
            </div>

            <div className="precio">
            <span>Precio: </span>{prop.precio}
            </div>

            <div className="stock">
            <span>Stock: </span>{prop.stock}
            </div>
        </div>
        <div>
            
        </div>
    </article>
  )
}

export default Item