import React from 'react'
import { Link } from 'react-router-dom';

const Item = (prop) => {

  return (
    <article className="articulo">
        
        <img src={prop.imagen} alt={prop.titulo}/>
        
        <div className="datosArticulo">
            <div className="titulo">
                <Link className="linkTitulo" to={`/autoparte/${prop.id}`}>{prop.titulo}</Link>
            </div>
            
            <div className="numeroParte">
                <span>Numero de parte: </span>{prop.nroparte}
            </div>

            <div className="precio">
            <span>Precio: </span>{prop.precio + '$'}
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