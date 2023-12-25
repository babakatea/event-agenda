import React from 'react';
import classNames from 'classnames';

import { Vector } from '@/shared/assets/images';

import styles from './CardHeader.module.scss';

interface Props {
  time: string;
  isHovered: boolean;
  category?: string;
}

export const CardHeader = (props: Props) => {
  const { time, category, isHovered } = props;

  const dateTime = new Date(time);

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className={styles.header}>
      <div className={styles.time}>{formattedTime}</div>
      {category && <div className={styles.category}>{category}</div>}
      <Vector
        className={classNames(styles.vector, { [styles.visible]: isHovered })}
      />
    </div>
  );
};
