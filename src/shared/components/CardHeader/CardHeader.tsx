import React from 'react';
import classNames from 'classnames';

import { Vector } from '@/shared/assets/images';

import styles from './CardHeader.module.scss';

interface Props {
  time: string;
  isHovered: boolean;
  category?: string;
  isCoverImage?: boolean;
}

export const CardHeader = (props: Props) => {
  const { time, category, isHovered, isCoverImage } = props;

  return (
    <div className={styles.header}>
      <div className={styles.time}>{time}</div>
      <div
        className={classNames(styles.category, { [styles.hidden]: !category })}
      >
        {category}
      </div>
      <Vector
        className={classNames(styles.vector, {
          [styles.visible]: isHovered,
          [styles.black]: isCoverImage,
        })}
      />
    </div>
  );
};
