import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/Test/Test';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
