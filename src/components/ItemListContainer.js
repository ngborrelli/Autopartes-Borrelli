import React from 'react';
import estilos from '../assets/css/estilos.css';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList.js';
import logo from '../assets/images/porsche.png';

const ItemListContainer = (prop) => {
  return (
    <div className="itemListContainer">
        <h1>Bienvenido, {prop.title}</h1>
        <ItemList />
    </div>
  )
}

export default ItemListContainer