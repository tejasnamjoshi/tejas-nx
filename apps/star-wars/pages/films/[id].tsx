import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { fetchSingleFilm } from 'api';
import { fetchAllFilms } from 'api';

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient();
  const { results } = await queryClient.fetchQuery(
    'fetchAllFilms',
    fetchAllFilms
  );
  const paths = results.map((film) => {
    const splitUrl = film.url.split('/');
    return { params: { id: splitUrl[splitUrl.length - 2] } };
  });

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Record<string, string>;
  const queryClient = new QueryClient();
  const film = await queryClient.fetchQuery(`fetchSingleFilm-${id}`, () =>
    fetchSingleFilm(id)
  );
  return { props: { film } };
};

export { default } from 'components/film/Film';
