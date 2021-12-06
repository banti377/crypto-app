import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getCoins } from '../hooks/useCoins';

const Home: NextPage = () => {
  return (
    <div>
      Home
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
