import React from 'react';
import estilos from '../assets/css/estilos.css';
import logo from '../assets/images/porsche.png';

const ItemListContainer = (prop) => {
  return (
    <div>
        <h1>Bienvenido, {prop.title}</h1>
    </div>
  )
}

export default ItemListContainer