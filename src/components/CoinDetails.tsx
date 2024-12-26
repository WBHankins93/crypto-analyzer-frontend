import React, { useEffect, useState } from 'react';
import { fetchCoinDetails } from '../services/api';
import { CoinDetails as CoinDetailsType } from '../types/CryptoTypes';
import { useParams } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const CoinDetails: React.FC = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const [coinDetails, setCoinDetails] = useState<CoinDetailsType | null>(null);

  useEffect(() => {
    const getCoinDetails = async () => {
      const validCoinId = coinId ?? '';
      if (!coinId) return;
      const data = await fetchCoinDetails(validCoinId);
      setCoinDetails(data);
    };
    getCoinDetails();
  }, [coinId]);

  if (!coinDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{coinDetails.name} Details</h2>
      <p>Price: ${coinDetails.price}</p>
      <p>Market Cap: ${coinDetails.marketCap}</p>
      <p>Volume: ${coinDetails.volume}</p>
      <LineChart width={600} height={300} data={coinDetails.history.map((price, index) => ({ name: index, price }))}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default CoinDetails;
