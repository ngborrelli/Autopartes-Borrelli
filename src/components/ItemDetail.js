import React from 'react';
import ItemCount from './ItemCount';
import foto from '../assets/images/1_1grande.jpg';

const ItemDetail = (prop) => {
  return (
   
    <article className="articuloDetalle">
        <div className="cajaImg">
            <img src={foto} />
        </div>

        <div className="agrupador">
            <div className="datosArticulo">
                <div className="titulo">
                    {prop.titulo}
                </div>

                <div className="descripcion">
                    {prop.descripcion}
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
            <div className="contadorCarrito">
                <ItemCount id={prop.id} stock={prop.stock}/>
            </div>
        </div>
    </article>
    
  )
}

export default ItemDetail