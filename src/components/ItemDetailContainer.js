import { React } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const { id } = useParams();
  
  return (
    <div>
        <ItemDetail autoparteId={id} />
    </div>
  )
}

export default ItemDetailContainer