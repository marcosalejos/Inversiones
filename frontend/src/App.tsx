import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Solicitudes from './pages/Solicitudes/Solicitudes'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='solicitudes/' element= {<Solicitudes/>}/>
        </Routes>
      </BrowserRouter>
    );
}
export default App
