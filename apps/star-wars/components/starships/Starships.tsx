import { ListItem, Notice } from '@tejas-nx/ui';
import { IStarship } from 'api';
import React from 'react';

export interface StarshipsProps {
  starships: {
    results: IStarship[];
  };
}

export function Starships({ starships }: StarshipsProps) {
  return (
    <div>
      <h1>Welcome to Starships!</h1>
      <Notice text="Renders the page on server using getServerSideProps" />
      <ul className="list-group">
        {starships.results.map((starship) => (
          <ListItem
            url={starship.url}
            urlPrefix="starships"
            label={starship.name}
            key={starship.url}
          />
        ))}
      </ul>
    </div>
  );
}

export default Starships;
