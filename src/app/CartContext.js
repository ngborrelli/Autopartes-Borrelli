import React from 'react';
import {createContext,useState} from 'react';

const Provider = ( { children } ) => {

    const [items, setItems] = useState([]);

    const addItem = (newItem, quantity) => {
        !items.find(item => item.id === newItem.id) && setItems([...items, newItem]);
    };


    const calcularImporte = () => {
        let importe = 0;

        items.map ( (item, i) => {
            importe+=item.precio*item.cantidad;
        })

        return importe;
    }

    const countItems = () => {

        let contador = 0;

        items.map( (item, i) => {
            contador+=item.cantidad;
        })

        return contador;
    };

    const removeItem = id => setItems(items.filter(item => item.id !== id));
    
    const clearItems = () => setItems([]);
    
    const isInCart = (id) => items.find(item => item.id === id) ? true : false;

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clearItems, isInCart, countItems, calcularImporte}}>
            { children }
        </CartContext.Provider>
    );
}

export default Provider
export const CartContext = createContext();