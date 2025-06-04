import { useState } from 'react';
import { usarAutenticacion } from '../context/ContextoAutenticacion';
import { useNavigate } from 'react-router-dom';

const Iniciar = () => {
  const { iniciarSesion, iniciarSesionConGoogle } = usarAutenticacion();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navegar = useNavigate();

  const manejarInicio = async (e) => {
    e.preventDefault();
    try {
      await iniciarSesion(correo, contrasena);
      navegar('/panel');
    } catch (error) {
      console.log(error, 'vamos a re morir xdddd');
    }
  };

  const manejarGoogle = async () => {
    try {
      await iniciarSesionConGoogle();
      navegar('/panel');
    } catch (error) {
      alert('Todo es tragedia y dolor');
    }
  };

  return (
    <>
      <div className="contenedor">
        <div className="formulario">
          <h2>Iniciar sesión</h2>
          <form onSubmit={manejarInicio}>
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
            <button type="submit">Ingresar</button>
          </form>
          <p className="separador">o</p>
          <button className="btnGoogle" onClick={manejarGoogle}>Ingresar con Google</button>
        </div>
      </div>

      <style>{`
        .contenedor {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .formulario {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        .formulario h2 {
          margin-bottom: 20px;
          color: #333;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #005dc5;
        }

        .btnGoogle {
          background-color: #db4437;
          margin-top: 10px;
        }

        .btnGoogle:hover {
          background-color: #b33226;
        }

        .separador {
          margin: 15px 0;
          color: #666;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default Iniciar;
