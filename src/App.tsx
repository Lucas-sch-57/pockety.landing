import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import LegalMentions from './pages/LegalMentions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentions-legales" element={<LegalMentions />} />
      <Route path="/confidentialite" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
