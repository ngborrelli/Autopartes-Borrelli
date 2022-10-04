import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../app/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {

 
  const { items, removeItem, clearItems, countItems, calcularImporte } = useContext(CartContext);

  return (

    countItems() > 0 ?

    <div className="divTablaCarrito" key="1">
      <table className="tablaCarrito">
        <thead>
          <tr>
            <th>
              ID.
            </th>
            <th>
              Descripcion
            </th>
            <th>
              Cantidad
            </th>
            <th>
              Precio Unitario
            </th>
            <th>
              Precio
            </th>
            <th>

            </th>
          </tr>
        </thead>
        <tbody>

          {
            items.map( (item, i) => 
                <tr key={item.nroparte}>
                  <td>
                    {item.nroparte}
                  </td>
                  <td>
                    {item.titulo}
                  </td>
                  <td>
                    {item.cantidad}
                  </td>
                  <td>
                    {item.precio}
                  </td>
                  <td>
                    {item.precio*item.cantidad}
                  </td>
                  <td>
                    <button className="botonQuitar" key={i} onClick={ () => removeItem(item.id) }>Quitar</button>
                  </td>
                </tr>
              
            )
          }
          
          <tr>
            <td>

            </td>
            <td>
              
            </td>
            <td>
              
            </td>
            <td>
              <b>Total</b>
            </td>
            <td>
            {
              calcularImporte()
            }
            </td>
            <td>
              
            </td>
          </tr>

        </tbody>
      </table>
      <button className="botonVaciar" onClick={ () => clearItems() } >Vaciar carrito</button>
      <Link className="botonFinalizar" to="/cerrarCompra">Comprar</Link>
    </div>

    : 
    
    <div className="carritoVacio">
      <span> Todavia no hay nada en el carrito. </span>
      <Link className="linkCarritoVacio" to="/">
            Volver
      </Link>
    </div>
  )
}

export default Cart