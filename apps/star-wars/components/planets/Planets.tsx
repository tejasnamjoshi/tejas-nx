import './Planets.module.scss';

import { ListItem, Notice } from '@tejas-nx/ui';
import { fetchAllPlanets } from 'api';
import React from 'react';
import useSWR from 'swr';

import Loader from '../loader/Loader';

export function Planets() {
  const { error, data } = useSWR('fetchAllPlanets', fetchAllPlanets);
  if (!error && !data) return <Loader />;
  return (
    <div>
      <Notice text="Fetches data on client using SWR" />
      <h1>Welcome to Planets!</h1>
      <ul className="list-group">
        {data.results.map((planet) => (
          <ListItem
            url={planet.url}
            urlPrefix="planets"
            label={planet.name}
            key={planet.url}
          />
        ))}
      </ul>
    </div>
  );
}

export default Planets;
