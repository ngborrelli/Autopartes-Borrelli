import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const { id } = useParams();
  
  return (
    <div>
        <ItemDetail id={id} />
    </div>
  )
}

export default ItemDetailContainer