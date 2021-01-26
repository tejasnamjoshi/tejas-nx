import { ListItem, Notice } from '@tejas-nx/ui';
import React from 'react';

import { IFilm } from '../../api';

interface IFilmProps {
  films: { results: IFilm[] };
}

export const Films = (props: IFilmProps) => {
  return (
    <div>
      <Notice text="Fetches data on server and passes the data to the client in props using getStaticProps" />
      <h1>Welcome to Films!</h1>
      <ul className="list-group">
        {props.films.results.map((film) => (
          <ListItem
            url={film.url}
            urlPrefix="films"
            label={film.title}
            key={film.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Films;
