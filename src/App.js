import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomInput from './components/CustomInput/CustomInput';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<CustomInput placeholder='placeholder'/>} />
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
