import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { CoinsData } from '../types/coints';

export const getCoins = async ({ pageParam = 1 }) => {
  const res = await axios.get<CoinsData>(`http://localhost:3000/api/coins?page=${pageParam}`);
  return res.data;
};

const useCoins = () => {
  return useInfiniteQuery('coins', getCoins, {
    getNextPageParam: (lastPage) => {
      const { limit, offset, total } = lastPage.stats;
      const page = offset / limit + 1;

      if ((limit + offset) < total) return page + 1;
      return false;
    },
  });
};

export default useCoins;
