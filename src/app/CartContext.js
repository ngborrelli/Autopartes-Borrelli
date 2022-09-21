import React from 'react';
import {createContext,useState} from 'react';

const Provider = ( { children } ) => {

    const [items, setItems] = useState([]);

    const addItem = (newItem, quantity) => {
        !items.find(item => item.id === newItem.id) && setItems([...items, newItem]);
    };

    const removeItem = id => setItems(items.filter(item => item.id !== id));
    
    const clearItems = () => setItems([]);
    
    const isInCart = (id) => items.find(item => item.id === id) ? true : false;

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clearItems, isInCart}}>
            { children }
        </CartContext.Provider>
    );
}

export default Provider
export const CartContext = createContext();