import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../app/CartContext';
import { getAutoparteById } from '../app/FirebaseCalls';    

const ItemDetail = () => {

    const { id } = useParams();

    const [autoparte, setAutoparte] = useState([]);

    const { addItem } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(0);

    const getAutoparte = async () => {
        const autop = id && await getAutoparteById(id) ;
        setAutoparte(autop);
    } 
  
    const sumar = (cant) => {
        setCantidad(cant);
        addItem( { id: id, nroparte : autoparte.nroparte, titulo: autoparte.titulo, precio : autoparte.precio, cantidad : cant })
    }
  
    useEffect(() => {
      return () => {
        getAutoparte(id);
      };
    }, [])

    return (

    <article className="articuloDetalle">
        <div className="cajaImg">
            <img src={autoparte.imagen} alt={autoparte.titulo}/>
        </div>

        <div className="agrupador">
            <div className="datosArticulo">
                <div className="titulo">
                    {autoparte.titulo}
                </div>

                <div className="descripcion">
                    {autoparte.descripcion}
                </div>
                
                <div className="numeroParte">
                    <span>Numero de parte: </span>{autoparte.nroparte}
                </div>               

                <div className="precio">
                <span>Precio: </span>{autoparte.precio + '$'}
                </div>

                <div className="stock">
                <span>Stock: </span>{autoparte.stock}
                </div>
            </div>
            {
                
                cantidad === 0 ?
                    <div className="contadorCarrito">
                        <ItemCount autoparteId={id} stock={autoparte.stock} onAdd={sumar}/>
                    </div> 
                    : 
                    <div>
                        <Link className="botonFinalizar" to="/cart">Ver carrito</Link>
                        <Link className="botonFinalizar" to={`/categoria/${autoparte.categoria}`}>Volver</Link>
                    </div>
                
            }
        </div>
    </article>
    
  )
}

export default ItemDetail