import axios from 'axios';
import { useQuery } from 'react-query';
import { CoinsData } from '../types/coints';

export const getCoins = async (page: number = 1) => {
  const res = await axios.get<CoinsData>(`http://localhost:3000/api/coins?page=${page}`);
  return res.data;
};

const useCoins = (page: number = 1) => {
  return useQuery(['coins', page], () => getCoins(page));
};

export default useCoins;
