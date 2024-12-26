import React from 'react';
import TrendingCoinsList from '../components/TrendingCoinsList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Crypto Trends</h1>
      <TrendingCoinsList />
    </div>
  );
};

export default HomePage;
