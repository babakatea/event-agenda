import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { RootState, useAppDispatch } from '@/app/store';
import { filterPosts } from '@/entities/posts';
import { Tabs } from '@/entities/posts/types/types';

import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.day1);
  const { headingData } = useSelector((state: RootState) => state.posts);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
    dispatch(filterPosts(tab));
  };

  // TODO: for mobile version the description is only keynotes
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
              [styles.switcher]: activeTab === Tabs.day2,
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
