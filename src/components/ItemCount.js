import React, { Component, useState } from 'react';

const ItemCount = (prop) => {

    let stock = prop.stock;

    const addItem = () => {
        setItemCounter(itemCounter < prop.stock ? itemCounter + 1 : itemCounter); 
    }

    const subItem = () => {
        setItemCounter(itemCounter > 0 ? itemCounter - 1 : itemCounter); 
    }

    const agregarCarrito = (cantidad) => {
        if (cantidad > stock) {
            console.log("No hay stock suficiente");
        }
        else {
            if (cantidad > 0) {
                prop.onAdd(cantidad);
            }
        }
    }

    const [itemCounter, setItemCounter] = useState(0);

  return (
    <div className="itemCounter">
        <div className="cajaBotones">
            <button onClick={subItem}>-</button>
            <span>{itemCounter}</span>
            <button onClick={addItem}>+</button>
        </div>

        <button onClick={() => {agregarCarrito(itemCounter)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount