import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './screens/MenuPage';
import AboutMe from './screens/AboutMe';
import Projects from './components/Projects';
import Contacto from './screens/Contact';
import Header from './components/Header';
import PrincipalPage from './screens/PrincipalPage';
import Video from './components/Video';
import Curriculum from './components/Curriculum';

function App() {

  return (
    <>
    <Router>
        <Header />
        <Routes>
        <Route path="/portfolio" element={<PrincipalPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/curriculum" component={Curriculum} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<Video />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
