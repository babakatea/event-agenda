import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { RootState } from '@/app/store';

import styles from './Header.module.scss';

enum Tabs {
  day1 = 'Day 1',
  day2 = 'Day 2',
}

export const Header = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.day1);
  const { headingData } = useSelector((state: RootState) => state.posts);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.description}>{headingData.intro}</div>
          <div className={styles.title}>{headingData.heading}</div>
        </div>
        <div className={styles.SwitchContainer}>
          <div
            className={classNames(styles.background, {
              [styles.moveToRight]: activeTab === Tabs.day2,
            })}
          />
          <div
            className={classNames(styles.switchLeft, {
              [styles.activeTab]: activeTab === Tabs.day1,
            })}
            onClick={() => handleTabClick(Tabs.day1)}
          >
            {Tabs.day1}
          </div>
          <div
            className={classNames(styles.switchRight, {
              [styles.activeTab]: activeTab === Tabs.day2,
            })}
            onClick={() => handleTabClick(Tabs.day2)}
          >
            {Tabs.day2}
          </div>
        </div>
        <div className={styles.timezone}> Timezone: Europe/Amsterdam </div>
      </div>
    </div>
  );
};
