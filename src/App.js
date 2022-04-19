import logo from './logo.svg';
import './App.css';
import Projects from './components/projects';
import Contact from './components/contact';
import Frontpage from './components/frontpage';
import Menu from './components/menu';
import Entry from './components/entry';
import { useLocation, Router, Routes, Route, Navigate } from 'react-router-dom';
import Boxhtml from './components/threejs/frontthree';


function App() {

  const location = useLocation();
  const isEntryMenuRender = location.pathname==="/"


  return (
    <>
    {!isEntryMenuRender && <Menu/>}
      <Routes>
        <Route path='/' element={<Entry/>} replace/>
        <Route path='*'
               element={<Frontpage/>} replace/>
        <Route path="/front" element={<Frontpage/>}/>
        <Route path="/testjs" element={<Boxhtml/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
