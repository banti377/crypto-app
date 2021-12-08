import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import queryString from 'query-string';
import { Coins, CoinsData } from '../../types/coints';
import { DEFAULT_PAGE_LIMIT } from '../../constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<CoinsData>) => {
  const page = parseInt(req.query.page as string, 10) || 1;

  const query = {
    limit: DEFAULT_PAGE_LIMIT,
    offset: ((page - 1) * DEFAULT_PAGE_LIMIT),
  };

  const apiRes = await axios.get<Coins>(`https://coinranking1.p.rapidapi.com/coins?${queryString.stringify(query)}`, {
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY || '',
    },
  });

  res.status(200).send(apiRes.data.data);
};

export default handler;
