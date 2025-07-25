import { createContext, useContext, useState, useEffect } from 'react'

import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged
} from 'firebase/auth';

import { autenticacion } from '../services/firebase';

// creamos el context
const ContextoAutenticacion = createContext();
export const usarAutenticacion = () => useContext(ContextoAutenticacion);

const proveedorGoogle = new GoogleAuthProvider();

export const ProveedorAutenticacion = ({children}) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState (true);

//funciones auxiliares
  const registrar = () => createUserWithEmailAndPassword(autenticacion, correo, contrasena);
  const iniciarSesion= (correo, contrasena) => signInWithEmailAndPassword(autenticacion, correo, contrasena);
  const cerrarSesion= ()=> signOut(autenticacion);
  const iniciarSesionConGoogle= ()=> signInWithPopup(autenticacion, proveedorGoogle);

  useEffect(() => {
    const cancelarSuscripcion = onAuthStateChanged(autenticacion, (usuarioActual) => {
       setUsuario(usuarioActual);
      setCargando(false);
    })
    return() => cancelarSuscripcion;
  }, [])

  return (
    <ContextoAutenticacion.Provider
      value={{usuario, registrar, iniciarSesion, iniciarSesionConGoogle, cerrarSesion}}>
      {!cargando && children}
    </ContextoAutenticacion.Provider>  
  )
}

