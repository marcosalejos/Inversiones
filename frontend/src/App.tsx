import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Solicitudes from './pages/Solicitudes/Solicitudes'
import Sidebar from './components/Sidebar';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Sidebar/>}>
            <Route path='solicitudes/' element= {<Solicitudes/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default App
