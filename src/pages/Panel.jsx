import { useState } from 'react';
import { usarAutenticacion } from '../context/ContextoAutenticacion';
import { Link } from 'react-router-dom';
import FormularioViaje from '../components/FormularioViaje';

const Panel = () => {
  const { usuario } = usarAutenticacion();

  return (
    <>
      <div className="panel">
        <div className="panel-contenido">
          <h1>Viajes compartidos</h1>
          <p className="bienvenida">
            Bienvenido, <strong>{usuario ? usuario.email : 'Invitado'}</strong>
          </p>

          {usuario ? (
            <>
            <p>Viajes a la costa Argentina y mas!</p>
            <FormularioViaje />
            </>
          ) : (
            <div className="acciones">
              <p className="mensaje">Por favor, inicia sesión o regístrate para acceder a más funciones.</p>
              <div className="botones">
                <Link to="/Iniciar">
                  <button className="btn-azul">Iniciar sesión</button>
                </Link>
                <Link to="/Registrar">
                  <button className="btn-verde">Registrarse</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .panel {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
        }

        .panel-contenido {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        h1 {
          margin-bottom: 10px;
          font-size: 28px;
          color: #333;
        }

        .bienvenida {
          font-size: 18px;
          margin-bottom: 30px;
        }

        .mensaje {
          font-size: 16px;
          margin-bottom: 20px;
          color: #555;
        }

        .botones {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        button {
          padding: 10px 20px;
          font-size: 15px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-azul {
          background-color: #007bff;
          color: white;
        }

        .btn-azul:hover {
          background-color: #005dc5;
        }

        .btn-verde {
          background-color: #28a745;
          color: white;
        }

        .btn-verde:hover {
          background-color: #1f7c33;
        }
      `}</style>
    </>
  );
};

export default Panel;
