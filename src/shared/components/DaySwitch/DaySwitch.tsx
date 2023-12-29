import React from 'react';
import classNames from 'classnames';

import { Tabs } from '@/entities/posts/types/types';

import styles from './DaySwitch.module.scss';

interface Props {
  activeTab: Tabs;
  handleTabClick: (tab: Tabs) => void;
  className?: string;
}

export const DaySwitch = (props: Props) => {
  const { activeTab, handleTabClick, className } = props;

  return (
    <div className={classNames(styles.container, className)}>
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
  );
};
