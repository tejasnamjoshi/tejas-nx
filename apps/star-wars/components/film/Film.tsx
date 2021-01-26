import { Notice } from '@tejas-nx/ui';
import { IFilm } from 'api';
import Link from 'next/link';
import React from 'react';

import styles from './Film.module.scss';

interface IFilmProps {
  film: IFilm;
}

const Film = ({ film }: IFilmProps) => {
  /* TODO: Remove this hack 
    Added this hack because there is an error during the build process where the server produces the following error - title of undefined
  */
  if (!film) film = {} as IFilm;
  return (
    <>
      <Notice text="Fetches data on server and passes the data to the client in props using getStaticProps" />
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <h4 className="card-title">{film.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{`Director: ${film.director}`}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{`Producer: ${film.producer}`}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{`Episode: ${film.episode_id}`}</h6>

          <p className="card-text">{film.opening_crawl}</p>

          <h6 className="card-title">Additional Info</h6>
          <ul>
            <li>
              <Link href="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link href="/starships">Starships</Link>
            </li>
            <li>
              <Link href="/planets">Planets</Link>
            </li>
            <li>
              <Link href="/species">Species</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Film;
