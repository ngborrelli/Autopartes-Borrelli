import React from 'react';
import estilos from '../assets/css/estilos.css';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList.js';
import logo from '../assets/images/porsche.png';

const ItemListContainer = () => {
  return (
    <div className="itemListContainer">
        <ItemList />
    </div>
  )
}

export default ItemListContainer