import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '@/app/store';
import { Header } from '@/components/Header';
import { filterPosts, loadPosts } from '@/entities/posts';
import { POST_ID } from '@/entities/posts/consts/constants';
import { Tabs } from '@/entities/posts/types/types';
import { useFetchPostsQuery } from '@/shared/api/agenda';
import { DaySwitch } from '@/shared/components/DaySwitch';
import { PostsList } from '@/widgets/PostsList';

import styles from './Agenda.module.scss';

export const Agenda = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.day1);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
    dispatch(filterPosts(tab));
  };

  const { data, isLoading, isFetching, isError, isSuccess } =
    useFetchPostsQuery({ post_id: POST_ID });

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadPosts(data.data));
    }
  }, [data, dispatch, isSuccess]);

  if (isError) {
    throw new Error('An error occurred while fetching posts');
  }

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Header activeTab={activeTab} handleTabClick={handleTabClick} />
      <DaySwitch
        activeTab={activeTab}
        className={styles.switchContainer}
        handleTabClick={handleTabClick}
      />
      <PostsList />
    </div>
  );
};
