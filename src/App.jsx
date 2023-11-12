import {} from 'react';
import Nav from './components/Nav';
import Rodape from './components/Rodape';
import { Outlet } from 'react-router-dom';
import './css/style.css';

function App() {
  return (
    <>
    <div className='main-container'>
      <Nav className="navegacao" />
      <Outlet className="main" />
      <Rodape className="rodape" />
    </div>   
    </>
  );
}

export default App;