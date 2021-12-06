import axios from 'axios';
import { useQuery } from 'react-query';
import { CoinsData } from '../types/coints';

export const getCoins = async () => {
  const res = await axios.get<CoinsData>('http://localhost:3000/api/coins');
  return res.data;
};

const useCoins = () => {
  return useQuery('coins', getCoins);
};

export default useCoins;
