export interface Coin {
    id: string;
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    volume: number;
    priceChange: number;
  }
  
  export interface CoinDetails extends Coin {
    description: string;
    history: number[];
  }
  