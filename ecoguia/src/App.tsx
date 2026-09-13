import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import Integrantes from './pages/Integrantes';
import Dashboard from './pages/Dashboard';
import Marcos from './pages/Marcos';
import MarcoDetalhe from './pages/MarcoDetalhe';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marcos" element={<Marcos />} />
          <Route path="/marcos/:id" element={<MarcoDetalhe />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;