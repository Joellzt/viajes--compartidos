import React, { useEffect, useState } from 'react';
import { obtenerViajes, eliminarViaje, actualizarViaje } from '../services/viajes';
import { usarAutenticacion } from '../context/ContextoAutenticacion';

const MisViajes = () => {
  const { usuario } = usarAutenticacion();
  const [viajes, setViajes] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [formulario, setFormulario] = useState({});

  useEffect(() => {
    const traerViajes = async () => {
      const todos = await obtenerViajes();
      const propios = todos.filter(v => v.creador === usuario?.email);
      setViajes(propios);
    };
    traerViajes();
  }, [usuario]);

  const manejarEliminar = async (id) => {
    await eliminarViaje(id);
    setViajes(prev => prev.filter(v => v.id !== id));
  };

  const manejarEditar = (viaje) => {
    setModoEdicion(viaje.id);
    setFormulario({ ...viaje });
  };

  const manejarGuardar = async () => {
    await actualizarViaje(modoEdicion, formulario);
    setViajes(prev =>
      prev.map(v => (v.id === modoEdicion ? { ...formulario, id: modoEdicion } : v))
    );
    setModoEdicion(null);
  };

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mis viajes</h2>
      {viajes.length === 0 ? (
        <p>No hay viajes guardados.</p>
      ) : (
        viajes.map((viaje) => (
          <div key={viaje.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            {modoEdicion === viaje.id ? (
              <>
                <input name="origen" value={formulario.origen} onChange={manejarCambio} />
                <input name="destino" value={formulario.destino} onChange={manejarCambio} />
                <input name="fecha" value={formulario.fecha} onChange={manejarCambio} type="date" />
                <input name="hora" value={formulario.hora} onChange={manejarCambio} />
                <input name="lugares" value={formulario.lugares} onChange={manejarCambio} type="number" />
                <button onClick={manejarGuardar}>Guardar</button>
                <button onClick={() => setModoEdicion(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <p><strong>Origen:</strong> {viaje.origen}</p>
                <p><strong>Destino:</strong> {viaje.destino}</p>
                <p><strong>Fecha:</strong> {viaje.fecha}</p>
                <p><strong>Hora:</strong> {viaje.hora}</p>
                <p><strong>Lugares:</strong> {viaje.lugares}</p>
                <p><strong>Precio:</strong> ${viaje.precio}</p>
                <p><strong>Vehículo:</strong> {viaje.tipo}</p>
                <button onClick={() => manejarEditar(viaje)}>Editar</button>
                <button onClick={() => manejarEliminar(viaje.id)}>Eliminar</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MisViajes;
