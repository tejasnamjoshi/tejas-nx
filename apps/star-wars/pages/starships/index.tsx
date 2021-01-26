import { fetchAllStarships } from 'api';
import { GetServerSideProps } from 'next';
import { QueryClient } from 'react-query';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  const starships = await queryClient.fetchQuery(
    'fetchAllStarships',
    fetchAllStarships
  );
  return { props: { starships } };
};

export { default } from 'components/starships/Starships';
