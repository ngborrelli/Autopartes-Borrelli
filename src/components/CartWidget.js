import React from 'react';
import { useContext } from 'react';
import carrito from '../assets/images/cart.svg';
import { CartContext } from '../app/CartContext';

const CartWidget = () => {

  const { items, addItem, removeItem, clearItems } = useContext(CartContext);

  return (
    <div className="carrito">
        <img src={carrito} alt="CartWidget"></img>
        <span id="contadorCarrito">{items.length}</span>
    </div>
  )
}

export default CartWidget