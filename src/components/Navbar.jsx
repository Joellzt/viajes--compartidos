import React from 'react';
import { Link } from 'react-router-dom';
import { usarAutenticacion } from '../context/ContextoAutenticacion';


const Navbar = () => {
  const { usuario, cerrarSesion } = usarAutenticacion();

  return (
    <>
      <nav className="navbar">
        <div className="navLinks">
          <Link className='navLink' to="/">Inicio</Link>
        </div>

        {usuario ? (
          <div className="menuCuenta">
            <span className="navLink">Mi cuenta ⌄</span>
            <div className="dropdown">
              <Link to="./Viajes">Mis viajes</Link>
              <button onClick={cerrarSesion}>Cerrar sesión</button>
            </div>
          </div>
        ) : (
          <div className="navLinks">
            <Link className="navLink" to="/iniciar">Iniciar sesión</Link>
            <Link className="navLink" to="/registrar">Registrarse</Link>
          </div>
        )}
      </nav>

      <style>{`
        .navbar {
          margin: auto;
          margin-top: 10px;
          background-color: #007bff;
          padding: 0.6rem 2rem 0.6rem 2rem;
          color: white;
          display: flex;
          align-items:center;
          border-radius:80px;
          justify-content: space-between;
          font-family: sans-serif;
          width:85%;
        }

        .navLinks {
          display: flex;
          gap: 3rem;
        }

        .navLink {
          color: white;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
          margin:1rem;
        }

        .navLink:hover {
          color: #facc15;
        }

        .menuCuenta {
          padding: 1rem;
          position: relative;
        }

        .dropdown {
          position: absolute;
          top: 2.5rem;
          right: 0;
          background-color: #374151;
          border-radius: 0.5rem;
          overflow: hidden;
          display: none;
          flex-direction: column;
          min-width: 160px;
        }

        .menuCuenta:hover .dropdown {
          display: flex;
        }

        .dropdown a, .dropdown button {
          padding: 0.75rem 1rem;
          color: white;
          text-decoration: none;
          background: none;
          border: none;
          text-align: left;
          width: 100%;
          cursor: pointer;
        }

        .dropdown a:hover, .dropdown button:hover {
          background-color: #4b5563;
        }
      `}</style>
    </>
  );
};

export default Navbar;
