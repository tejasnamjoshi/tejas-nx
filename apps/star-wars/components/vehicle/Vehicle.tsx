import { Notice } from '@tejas-nx/ui';
import { fetchSingleVehicle } from 'api';
import Loader from 'components/loader/Loader';
import { useRouter } from 'next/dist/client/router';
import React, { Suspense } from 'react';
import { useQuery } from 'react-query';

import styles from './Vehicle.module.scss';

export function Vehicle() {
  const {
    query: { id },
  } = useRouter();
  const { data: vehicle, isLoading } = useQuery(
    `fetchSingleVehicle-${id}`,
    () => fetchSingleVehicle(id as string)
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <Notice text="Fetches data on client" />
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <h4 className="card-title">{vehicle.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{`Model: ${vehicle.model}`}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{`Manufacturer: ${vehicle.manufacturer}`}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{`Crew: ${vehicle.crew}`}</h6>
        </div>
      </div>
    </>
  );
}

export default Vehicle;
