import { QueryClient } from 'react-query';
import { fetchAllFilms } from 'api';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const films = await queryClient.fetchQuery('fetchAllFilms', fetchAllFilms);

  return { props: { films } };
};

export { default } from 'components/films/Films';
