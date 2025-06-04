import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ProveedorAutenticacion} from "./context/ContextoAutenticacion";
import Iniciar from './pages/iniciar';
import Panel from './pages/panel';
import Inicio from './pages/Inicio';
import { Registrar } from './pages/Registrar';
import Navbar from './components/Navbar';
import './App.css';


const App = () => {
  return (
    <ProveedorAutenticacion>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Inicio/>} />

          <Route path='/Iniciar' element= {<Iniciar/>}/>

          <Route path='/Panel' element = {<Panel/>}/>

          <Route path='/Registrar' element={<Registrar/>}/>

        </Routes>
      </BrowserRouter>
    </ProveedorAutenticacion>
  )
}

export default App