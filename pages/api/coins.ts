import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Coins, CoinsData } from '../../types/coints';

const handler = async (req: NextApiRequest, res: NextApiResponse<CoinsData>) => {
  const apiRes = await axios.get<Coins>('https://coinranking1.p.rapidapi.com/coins', {
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY || '',
    },
  });

  res.status(200).send(apiRes.data.data);
};

export default handler;
