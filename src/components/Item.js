import React from 'react'
import ItemCount from './ItemCount';
import imagen from '../assets/images/2_1.jpg';

const Item = (prop) => {

  return (
    <article className="articulo">
        <div>
            <img src={imagen} />
        </div>
        <div className="datosArticulo">
            <div className="titulo">
                {prop.titulo}
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
            <ItemCount id={prop.id} stock={prop.stock}/>
        </div>
    </article>
  )
}

export default Item