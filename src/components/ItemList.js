import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocuments } from '../app/FirebaseCalls';
import { getAutopartesByCategoria } from '../app/FirebaseCalls';
import Item from './Item';

const ItemList = () => {

  const { catid } = useParams();

  const [autopartes, setAutopartes] = useState([]);
  
  const getData = async () => {
    const aps = catid ? await getAutopartesByCategoria(catid) : await getDocuments('autopartes');
    setAutopartes(aps);
  }

  useEffect(() => {
    getData();
  }, [catid])


  return (
        <>
          {
            autopartes && autopartes.map((autoparte, i) => <Item key={autoparte.id} id={autoparte.id} nroparte={autoparte.nroparte} titulo={autoparte.titulo} precio={autoparte.precio} stock={autoparte.stock} imagen={autoparte.imagen} currentCat={catid}/>)
          }
        </>
  )
}

export default ItemList