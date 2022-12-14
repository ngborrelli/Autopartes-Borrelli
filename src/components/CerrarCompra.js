import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../app/CartContext';
import { createDocuments, getAutoparteById, updateStock } from '../app/FirebaseCalls';
import { Timestamp } from "firebase/firestore";

const CerrarCompra = () => {

    const { items, clearItems } = useContext(CartContext);


    let factura = {
        fecha: Timestamp.now().toDate().toString(),
        nombre: '', 
        correo: '',
        telefono: '',
        items: []
    }

    let itemsConError = [];

    let totImp = 0;
    let totImpIVA = 0;
    let totImpMasIVA = 0;

    items.map( (item) => {
      const imp = Number((item.precio * item.cantidad).toFixed(2));
      const impIVA = Number((imp * 21 / 100 ).toFixed(2));
      const impMasIVA = Number(imp + impIVA);
      factura.items.push( {id: item.id, 
                          nroparte : item.nroparte, 
                          titulo: item.titulo, 
                          precio : item.precio, 
                          cantidad : item.cantidad,
                          importe : imp,
                          immporteIVA : impIVA,
                          importeMasIVA : impMasIVA
                      }  );
      totImp += imp;
      totImpIVA += impIVA;
      totImpMasIVA += impMasIVA;
    })

    const cerrarCompra = async () => {

        factura.items.map( async (item, i) => {
            const autop = await getAutoparteById(item.id);
            if (item.cantidad <= autop.stock) {
              await createDocuments('facturas', factura);
              await updateStock(item.id, Number(autop.stock - item.cantidad));
              clearItems();
            }
            else {
              itemsConError.push(item);
            }
          });
          alert ("Gracias por tu compra!")

    }

  return (
    <div className="divTablaCarrito" key="1">
      <table className="tablaCarrito">
        <thead>
          <tr>
            <th>ID.</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio</th>
            <th>IVA</th>
            <th>Precio final</th>
          </tr>
        </thead>
        <tbody>
         {
            factura.items.map( (item, i) => 
                <tr key={item.nroparte}>
                  <td>{item.nroparte}</td>
                  <td>{item.titulo}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.precio.toFixed(2)}$</td>
                  <td>{item.importe.toFixed(2)}$</td>
                  <td>{item.immporteIVA.toFixed(2)}$</td>
                  <td>{item.importeMasIVA.toFixed(2)}$</td>
                </tr>
              )
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><b>Total</b></td>
            <td>{totImp.toFixed(2)}$</td>
            <td>{totImpIVA.toFixed(2)}$</td>
            <td>{totImpMasIVA.toFixed(2)}$</td>            
          </tr>

        </tbody>
      </table>

          <div className="cajaFormCompra">
                <label>Nombre:</label>
                <input type="text" name="txtNombre" placeholder="Tu nombre" onChange={ (e) => { factura.nombre = e.target.value} } />
                <label>Correo eletr??nico:</label>
                <input type="email" name="txtCorreo" placeholder="Tu correo electr??nico" onChange={ (e) => { factura.correo = e.target.value} } />
                <label>Tel??fono:</label>
                <input type="text" name="txtTelefono" placeholder="Tu tel??fono (sin espacios ni guiones)" onChange={ (e) => { factura.telefono = e.target.value} } />
                <button className="botonCerrarCompra" onClick={ () => cerrarCompra() } >Finalizar compra</button>
          </div>
    </div>
  )
}

export default CerrarCompra