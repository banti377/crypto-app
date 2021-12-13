import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { AiOutlineSearch } from 'react-icons/ai';
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
      <div className="absolute -top-5 w-full flex items-center justify-center">
        <div className="relative w-full flex items-center">
          <AiOutlineSearch className="ml-2 absolute w-5 h-5 text-primary-dark pointer-events-none" />
          <input
            type="text"
            className="pl-10 pr-5 py-2 w-2/3 rounded-md shadow-md"
            placeholder="Search cryptocurrencies..."
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-10 gap-x-5">
        {data?.pages?.map((crrPage) => {
          return crrPage.coins?.map((coin) => {
            return (
              <Card
                key={coin.id}
                title={coin.name}
                logoURL={coin.iconUrl}
                symbol={coin.symbol}
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
