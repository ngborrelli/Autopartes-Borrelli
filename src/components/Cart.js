import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../app/CartContext';


const Cart = () => {

  const { items, addItem, removeItem, clearItems } = useContext(CartContext);

  return (
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
              Precio
            </th>
            <th>

            </th>
          </tr>
        </thead>
        <tbody>

          {
            items.map( (item, i) => 
                <tr>
                  <td>
                    {item.id}
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
                    <button className="botonQuitar" key={i} onClick={ () => removeItem(item.id) }>Quitar</button>
                  </td>
                </tr>
            )
          }

        </tbody>
      </table>
      <button className="botonVaciar" onClick={ () => clearItems() } >Vaciar carrito</button>
    </div>
  )
}

export default Cart