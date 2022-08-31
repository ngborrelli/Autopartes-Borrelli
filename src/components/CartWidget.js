import React from 'react';
import estilos from '../assets/css/estilos.css';
import carrito from '../assets/images/cart.svg';

const CartWidget = () => {
  return (
    <div className="carrito">
        <img src={carrito} alt="CartWidget"></img>
        <span id="contadorCarrito">4</span>
    </div>
  )
}

export default CartWidget