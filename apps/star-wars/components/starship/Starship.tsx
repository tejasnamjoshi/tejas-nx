import { Notice } from '@tejas-nx/ui';
import { IStarship } from 'api';
import React from 'react';

import styles from './Starship.module.scss';

interface IStarshipProps {
  starship: IStarship;
}

export function Starship({ starship }: IStarshipProps) {
  return (
    <>
      <Notice text="Fetches data & renders the page on server using getServerSideProps" />
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <h4 className="card-title">{starship.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{`Model: ${starship.model}`}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{`Manufacturer: ${starship.manufacturer}`}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{`Crew: ${starship.crew}`}</h6>
        </div>
      </div>
    </>
  );
}

export default Starship;
