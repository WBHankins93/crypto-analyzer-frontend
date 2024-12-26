import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Update with your backend URL

export const fetchTrendingCoins = async () => {
//   const response = await axios.get(`${BASE_URL}/api/trending`);
//   return response.data;
return [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 30000 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2000 },
    { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.07 },
  ];
};

export const fetchCoinDetails = async (coinId: string) => {
//   const response = await axios.get(`${BASE_URL}/api/coins/${coinId}`);
//   return response.data;
return {
    id: coinId,
    name: coinId === 'bitcoin' ? 'Bitcoin' : 'Ethereum',
    symbol: coinId === 'bitcoin' ? 'BTC' : 'ETH',
    description: 'This is a sample description of the cryptocurrency.',
    price: coinId === 'bitcoin' ? 30000 : 2000,
  };
};
