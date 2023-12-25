import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import styles from './Header.module.scss';

export const Header = () => {
  const { headingData } = useSelector((state: RootState) => state.posts);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.description}>{headingData.intro}</div>
          <div className={styles.title}>{headingData.heading}</div>
        </div>
        <div className={styles.SwitchContainer}>
          <div className={styles.switchLeft}>Day 1</div>
          <div className={styles.switchRight}>Day 2</div>
        </div>
        <div className={styles.timezone}> Timezone: Europe/Amsterdam </div>
      </div>
    </div>
  );
};
