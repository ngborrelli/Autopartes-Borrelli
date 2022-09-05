import React from 'react';
import estilos from '../assets/css/estilos.css';
import ItemCount from '../components/ItemCount';
import logo from '../assets/images/porsche.png';

const ItemListContainer = (prop) => {
  return (
    <div className="itemListContainer">
        <h1>Bienvenido, {prop.title}</h1>
        <ItemCount stock="10" />
    </div>
  )
}

export default ItemListContainer