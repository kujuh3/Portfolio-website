import Projects from './components/projects';
import Contact from './components/contact';
import Frontpage from './components/frontpage';
import Menu from './components/menu';
import Entry from './components/entry';
import { useLocation, Routes, Route } from 'react-router-dom';

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
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
