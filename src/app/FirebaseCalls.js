import { collection, getDocs, query, doc, getDoc, addDoc, updateDoc, where } from "firebase/firestore";
import { db } from './Firebase';

export const createDocuments = async(collName, obj) => {
    const colRef = collection(db, collName);
    const data = await addDoc(colRef, obj);
    console.log('createDocuments: ' + data.id)
    return data.id;
}

export const getDocuments = async (collectionName)  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getCategoriaByNumero = async (catNumero) => {
    console.log('categoria:'+catNumero);
    const colRef = collection(db, 'categoria');
    const result = await getDocs(query(colRef, where('numero', '==', catNumero)));
    return (result.data());
}


export const getAutopartesByCategoria = async (catNumero) => {
    const colRef = collection(db, 'autopartes');
    const result = await getDocs(query(colRef, where('categoria', '==', catNumero)));
    return getArrayFromCollection(result);
}


export const getAutoparteById = async (id) => {
    const colRef = collection(db, 'autopartes');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

export const updateStock = async (id, nuevoStock) => {
  const colRef = collection(db, 'autopartes');
  await updateDoc(doc(colRef, id), {stock: nuevoStock})
}

//------------------------------------------------------------------------------

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}


