import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CoinPage from './pages/CoinPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/coin/:coinId" element={<CoinPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
