import Link from 'next/link';
import React from 'react';

import styles from './ListItem.module.scss';

interface IListItemProps {
  label: string;
  url: string;
  urlPrefix: string;
}

export const ListItem = (props: IListItemProps) => {
  const splitUrl = props.url.split('/');
  const id = splitUrl[splitUrl.length - 2];

  return (
    <Link href={`/${props.urlPrefix}/${id}`}>
      <li className={`${styles.item} list-group-item`}>{props.label}</li>
    </Link>
  );
};

export default ListItem;
