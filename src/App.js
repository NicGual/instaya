import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CustomInput from './components/CustomInput/CustomInput';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import {Seguimiento} from './pages/Seguimiento/Seguimiento';


function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/seguimiento" element={<Seguimiento/>}n />
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
