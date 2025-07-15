import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>
      <div className="contenedorInicio">
        <div className="cardInicio">
          <h1>Bienvenidos a <span className="marca">Record Paper</span></h1>
          <p>Una herramienta de ayuda a la memoria</p>
          <div className="botones">
            <Link to="/Iniciar"><button className="btnInicio">Iniciar sesión</button></Link>
            <Link to="/Registrar"><button className="btnInicio">Registrarse</button></Link>
          </div>
        </div>
      </div>

      <style>{`
        .contenedorInicio {
          display: flex;
          margin-top:20px;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: 'Segoe UI', sans-serif;
        }

        .cardInicio {
          background-color: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        .cardInicio h1 {
          font-size: 24px;
          color: #2b2b2b;
        }

        .cardInicio p {
          font-size: 16px;
          margin-top: 10px;
          color: #555;
        }

        .marca {
          color: #007bff;
        }

        .botones {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btnInicio {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .btnInicio:hover {
          background-color: #005dc5;
        }
      `}</style>
    </>
  );
};

export default Inicio;
