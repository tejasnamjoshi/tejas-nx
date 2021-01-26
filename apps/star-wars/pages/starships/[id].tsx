import { fetchSingleStarship } from 'api';
import { GetServerSideProps } from 'next';
import { QueryClient } from 'react-query';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Record<string, string>;
  const queryClient = new QueryClient();
  const starship = await queryClient.fetchQuery(
    `fetchSingleStarship-${id}`,
    () => fetchSingleStarship(id)
  );

  return { props: { starship } };
};

export { default } from 'components/starship/Starship';
