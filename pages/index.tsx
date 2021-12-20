import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import useCoins, { getCoins } from '../hooks/useCoins';
import Card from '../components/Card';
import Button from '../components/Button';

const Home: NextPage = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCoins();

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        Something went wrong.
      </div>
    );
  }

  return (
    <div className="relative flex flex-col space-y-20 pb-16">
      <div className="grid grid-cols-3 gap-y-10 gap-x-5 mt-10">
        {data?.pages?.map((crrPage) => {
          return crrPage.coins?.map((coin) => {
            return (
              <Card
                key={coin.id}
                coin={coin}
                baseCurrency={crrPage.base.symbol}
              />
            );
          });
        })}
      </div>
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        loading={isFetchingNextPage || (!data && !error)}
      >
        Load more
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('coins', getCoins);

  return {
    props: {
      /**
       * Why JSON.stringify and JSON.parse?
       * @see https://github.com/tannerlinsley/react-query/issues/1458
       */
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Home;
