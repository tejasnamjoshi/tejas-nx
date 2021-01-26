import React from 'react';

import styles from './Notice.module.scss';

/* eslint-disable-next-line */
export interface NoticeProps {
  text: string;
}

export function Notice(props: NoticeProps) {
  return <p className={styles.red}>{props.text}</p>;
}

export default Notice;
