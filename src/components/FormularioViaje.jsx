import React, { useState } from 'react';
import { agregarViaje } from '../services/viajes';
import { usarAutenticacion } from '../context/ContextoAutenticacion';

const destinosDisponibles = [
  "Bahía Blanca",
  "Santa Clara del Mar",
  "Mar del Plata",
  "Necochea",
  "DisneyLand"
];

const horariosDisponibles = ["12:00", "15:00", "18:00"];
const precioFijo = 8000;
const tipoVehiculo = "Combi";

const FormularioViaje = () => {
  const { usuario } = usarAutenticacion();
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState(destinosDisponibles[0]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState(horariosDisponibles[0]);
  const [lugares, setLugares] = useState(1);
  const [viajeAgregado, setViajeAgregado] = useState(null);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const viaje = {
        origen,
        destino,
        fecha,
        hora,
        lugares: parseInt(lugares),
        precio: precioFijo,
        tipo: tipoVehiculo,
        creador: usuario.email,
        uid: usuario.uid,
        creadoEn: new Date()
      };

      await agregarViaje(viaje);
      alert("¡Viaje agregado con éxito!");
      setViajeAgregado(viaje);

      setOrigen("");
      setDestino(destinosDisponibles[0]);
      setFecha("");
      setHora(horariosDisponibles[0]);
      setLugares(1);
    } catch (error) {
      alert("Error al agregar el viaje");
    }
  };

  return (
    <>
      <div>
        <form className="formulario" onSubmit={manejarEnvio}>
          <h2>Agregar nuevo viaje</h2>
          <input type="text" placeholder="Origen" value={origen} onChange={(e) => setOrigen(e.target.value)} required />

          <select value={destino} onChange={(e) => setDestino(e.target.value)} required>
            {destinosDisponibles.map((dest, i) => (
              <option key={i} value={dest}>{dest}</option>
            ))}
          </select>

          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />

          <select value={hora} onChange={(e) => setHora(e.target.value)} required>
            {horariosDisponibles.map((h, i) => (
              <option key={i} value={h}>{h}</option>
            ))}
          </select>

          <input type="number" min="1" value={lugares} onChange={(e) => setLugares(e.target.value)} required />

          <input type="text" value={`$${precioFijo}`} disabled />
          <input type="text" value={tipoVehiculo} disabled />

          <button type="submit">Agregar viaje</button>

          {viajeAgregado && (
            <div className="viaje-agregado">
              <h3>Viaje agregado:</h3>
              <p><strong>Origen:</strong> {viajeAgregado.origen}</p>
              <p><strong>Destino:</strong> {viajeAgregado.destino}</p>
              <p><strong>Fecha:</strong> {viajeAgregado.fecha}</p>
              <p><strong>Hora:</strong> {viajeAgregado.hora}</p>
              <p><strong>Lugares:</strong> {viajeAgregado.lugares}</p>
            </div>
          )}
        </form>
      </div>
      <style>
        {`
          .formulario {
            max-width: 500px;
            margin: 2rem auto;
            padding: 2rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #f9f9f9;
            font-family: sans-serif;
          }

          .formulario h2 {
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .formulario input,
          .formulario select {
            display: block;
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          .formulario button {
            width: 100%;
            padding: 0.75rem;
            background-color: #ff4d4d;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
          }

          .formulario button:hover {
            background-color: #e60000;
          }

          .viaje-agregado {
            margin-top: 2rem;
            padding: 1rem;
            background: #e8ffe8;
            border: 1px solid #99cc99;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
};

export default FormularioViaje;
