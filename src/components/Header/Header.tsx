import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { Tabs } from '@/entities/posts/types/types';
import { DaySwitch } from '@/shared/components/DaySwitch';

import styles from './Header.module.scss';

interface Props {
  activeTab: Tabs;
  handleTabClick: (tab: Tabs) => void;
}

export const Header = (props: Props) => {
  const { headingData } = useSelector((state: RootState) => state.posts);
  const { activeTab, handleTabClick } = props;

  // TODO: for mobile version the description is only keynotes
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.intro}>{headingData.intro}</div>
          <div className={styles.heading}>{headingData.heading}</div>
        </div>
        <DaySwitch
          activeTab={activeTab}
          className={styles.switchContainer}
          handleTabClick={handleTabClick}
        />
        <div className={styles.timezone}> Timezone: Europe/Amsterdam </div>
      </div>
    </div>
  );
};
