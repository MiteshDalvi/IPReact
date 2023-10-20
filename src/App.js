import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';g
import Projects from './components/Projects';
import About from './components/About';
import ContactMe from './components/Contactme';
import ThankYou from './components/thanku';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/thank" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
