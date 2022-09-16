import { React, useState, useEffect } from 'react';
import { getArticulos } from './ApiCalls';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemList = () => {

const { catid } = useParams();

    useEffect(() => {
        getArticulos(catid).then((data) => {
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