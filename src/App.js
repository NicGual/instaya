import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CustomInput from './components/CustomInput/CustomInput';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
