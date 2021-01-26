import './vehicles.module.scss';

import { ListItem, Notice } from '@tejas-nx/ui';
import { fetchVehicles } from 'api';
import Loader from 'components/loader/Loader';
import React from 'react';
import { useQuery } from 'react-query';

export function Vehicles() {
  const { data, isLoading } = useQuery('fetchVehicles', fetchVehicles);
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1>Welcome to Vehicles!</h1>
      <Notice text="Fetches data on client" />
      <ul className="list-group">
        {data.results.map((vehicle) => (
          <ListItem
            url={vehicle.url}
            urlPrefix="vehicles"
            label={vehicle.name}
            key={vehicle.url}
          />
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
