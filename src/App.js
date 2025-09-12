import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdoptionPortal from './pages/AdoptionPortal';
import SurvivorReconnection from './pages/SurvivorReconnection';
import SupportResources from './pages/SupportResources';
import About from './pages/About';
import PrivacyNotice from './components/PrivacyNotice';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adoption" element={<AdoptionPortal />} />
            <Route path="/survivor-reconnection" element={<SurvivorReconnection />} />
            <Route path="/support" element={<SupportResources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <PrivacyNotice />
      </div>
    </Router>
  );
}

export default App;
