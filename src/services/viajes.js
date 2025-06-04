import { baseDeDatos } from "./firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from "firebase/firestore";

const collecionViajes = collection(baseDeDatos, "viajes");

export const agregarViaje = async (viaje) => {
    try {
        await addDoc(collecionViajes, viaje);
    } catch (error) {
        console.error("Error al agregar el viaje: ", error);
    }
};  

export const obtenerViajes = async () => {
    try {
        const snapshot = await getDocs(collecionViajes);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error al obtener los viajes: ", error);
        return [];
    }
};

export const obtenerViajesPorUsuario = async (uid) => {
    try {
        const q = query(collecionViajes, where("uid", "==", uid));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error al obtener los viajes del usuario: ", error);
        return [];
    }
};
