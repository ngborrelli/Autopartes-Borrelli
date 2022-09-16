import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getArticulo } from './ApiCalls';

const ItemDetailContainer = () => {

  const { id } = useParams();
  
    useEffect(() => {
        getArticulo(id).then((data) => {
            setArticulo(data);
        })
    });

    const [articulo, setArticulo] = useState([]);
  return (
    <div>
        <ItemDetail id={articulo.id} titulo={articulo.titulo} descripcion={articulo.descripcion} precio={articulo.precio} stock={articulo.stock} img={articulo.imagen1}/>
    </div>
  )
}

export default ItemDetailContainer