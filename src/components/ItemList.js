import { React, useState, useEffect } from 'react';
import { getArticulos } from './ApiCalls';
import Item from './Item';

const ItemList = () => {

    useEffect(() => {
        getArticulos().then((data) => {
            setArticulos(data);
        })
    });

    const [articulos, setArticulos] = useState([]);
    
  return (
    <div className="itemList">
            {
                articulos.map((articulo, i) => <Item key={i} id={articulo.id} titulo={articulo.titulo} precio={articulo.precio} stock={articulo.stock} img={articulo.imagen1}/>)
            }
    </div>
    
  )
}

export default ItemList