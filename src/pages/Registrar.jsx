import React from 'react';
import { useState } from 'react';
import { usarAutenticacion } from '../context/ContextoAutenticacion';
import { useNavigate } from 'react-router-dom';

export const Registrar = () => {
    const {registrar} = usarAutenticacion();
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navegar = useNavigate();

    // funcion auxiliar

    const manejarRegistro = async (e) =>{
        e.preventDefault();
        try {
            await registrar(correo, contrasena);
            navegar("/panel");
        } catch (error) {
            alert(error.message);
        }
    }


  return (
    <>
    <form className="formulario" onSubmit={manejarRegistro}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
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
        `}
      </style>
      </>
  )
}
