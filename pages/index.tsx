import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import Card from '../components/Card';
import useCoins, { getCoins } from '../hooks/useCoins';

const Home: NextPage = () => {
  const { data, error } = useCoins();

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        Something went wrong.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl font-medium">Global Stats</h1>
        <div className="flex flex-row items-center flex-wrap justify-between">
          <Card
            title="Total Cryptocurrencies"
            content={(
              <div className="font-medium text-xl">
                {data?.stats.total}
              </div>
          )}
          />
          <Card
            title="Total 24h Volume"
            content={(
              <div className="font-medium text-xl">
                {data?.stats.total24hVolume}
              </div>
          )}
          />
          <Card
            title="Total Exchanges"
            content={(
              <div className="font-medium text-xl">
                {data?.stats.totalExchanges}
              </div>
          )}
          />
          <Card
            title="Total Marketcap"
            content={(
              <div className="font-medium text-xl">
                {data?.stats.totalMarketCap}
              </div>
          )}
          />
        </div>
      </div>
      <div>Top cryptos</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('coins', getCoins);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
