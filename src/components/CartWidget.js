import React from 'react';
import { useContext } from 'react';
import carrito from '../assets/images/cart.svg';
import { CartContext } from '../app/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { items, addItem, removeItem, clearItems, countItems } = useContext(CartContext);

  return (
    <div className="carrito">
        <Link to="/cart"><img src={carrito} alt="CartWidget"></img></Link>
        <span id="contadorCarrito">{countItems()}</span>
        
    </div>
  )
}

export default CartWidget