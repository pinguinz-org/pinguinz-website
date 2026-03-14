import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Download from './pages/Download';
import Docs from './pages/Docs';
import DocPage from './pages/DocPage';
import Releases from './pages/Releases';
import Roadmap from './pages/Roadmap';
import About from './pages/About';

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/download" element={<Download />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/:section" element={<DocPage />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
