import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CustomInput from './components/CustomInput/CustomInput';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import {Seguimiento} from './pages/Seguimiento/Seguimiento';
import Formulario from './pages/registroPaquete/registroPaquete'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/seguimiento" element={<Seguimiento/>}/>
          <Route path="/registro-paquete" element={<Formulario/>}/>
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
