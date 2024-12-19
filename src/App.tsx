import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SpotTrading from './pages/SpotTrading';
import LeverageTrading from './pages/LeverageTrading';
import ReferralProgram from './pages/ReferralProgram';
import Help from './pages/Help';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/spot-trading" element={<SpotTrading />} />
          <Route path="/leverage-trading" element={<LeverageTrading />} />
          <Route path="/referral" element={<ReferralProgram />} />
          <Route path="/help" element={<Help />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;