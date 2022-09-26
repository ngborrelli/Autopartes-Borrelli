import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import foto from '../assets/images/1_1grande.jpg';
import { Link } from 'react-router-dom';
import { CartContext } from '../app/CartContext';

const ItemDetail = (prop) => {

    const { items, addItem, removeItem, clearItems, countItems } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(0);

    const sumar = (cant) => {
        setCantidad(cant);
        addItem( { id : prop.id, titulo: prop.titulo, precio : prop.precio, cantidad : cant })
    }

    return (

    <article className="articuloDetalle">
        <div className="cajaImg">
            <img src={foto} alt="Foto item"/>
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
            {
                
                cantidad === 0 ?
                    <div className="contadorCarrito">
                        <ItemCount id={prop.id} stock={prop.stock} onAdd={sumar}/>
                    </div> 
                    : 
                    <div>
                        <Link className="botonFinalizar" to="/cart">Finalizar compra</Link>
                    </div>
                
            }
        </div>
    </article>
    
  )
}

export default ItemDetail