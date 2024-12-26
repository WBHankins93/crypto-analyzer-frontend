import React, { useEffect, useState } from 'react';
import { fetchTrendingCoins } from '../services/api';
import { Coin } from '../types/CryptoTypes';
import { Link } from 'react-router-dom';

const TrendingCoinsList: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const getTrendingCoins = async () => {
      const data = await fetchTrendingCoins();
      setCoins(data);
    };
    getTrendingCoins();
  }, []);

  return (
    <div>
      <h2>Trending Coins</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
              </td>
              <td>${coin.price.toFixed(2)}</td>
              <td
                style={{
                  color: coin.priceChange > 0 ? 'green' : 'red',
                }}
              >
                {coin.priceChange.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingCoinsList;
