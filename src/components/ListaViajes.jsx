import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const ListaViajes = () => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    const obtenerViajes = async () => {
      const querySnapshot = await getDocs(collection(db, 'viajes'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setViajes(data);
    };
    obtenerViajes();
  }, []);

  return (
    <div>
      <h2>Viajes disponibles</h2>
      {viajes.map(viaje => (
        <div key={viaje.id}>
          <p>{viaje.origen} → {viaje.destino}</p>
          <p>{viaje.fecha} a las {viaje.hora}</p>
          <p>${viaje.precio} - Lugares: {viaje.lugaresDisponibles}</p>
          <button>Unirme</button>
        </div>
      ))}
    </div>
  );
};

export default ListaViajes;
