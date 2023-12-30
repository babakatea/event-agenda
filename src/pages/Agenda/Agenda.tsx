import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '@/app/store';
import { filterPosts, loadPosts } from '@/entities/posts';
import { Tabs } from '@/entities/posts/types/types';
import { useFetchPostsQuery } from '@/shared/api/agenda';
import { DaySwitch } from '@/shared/components/DaySwitch';
import { Loading } from '@/shared/components/Loading';
import { Header } from '@/widgets/Header';
import { PostsList } from '@/widgets/PostsList';

import styles from './Agenda.module.scss';

/**
 * POST_ID is stored in environment variables for several reasons:
 * 1. Flexibility and Maintainability: Allows easy adjustments without changing the source code,
 * particularly useful for different environments like development or production.
 * 2. Prevents Hardcoding: Encourages a more dynamic approach for configuration values.
 * 3. Integration and Deployment: Facilitates configuring the application in various deployment scenarios.
 */
export const Agenda = () => {
  if (!process.env.REACT_APP_POST_ID) {
    throw new Error('Post ID is not defined');
  }

  const postId: number = Number(process.env.REACT_APP_POST_ID);

  const { data, isLoading, isFetching, isError, isSuccess } =
    useFetchPostsQuery({ post_id: postId });

  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.day1);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
    dispatch(filterPosts(tab));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadPosts(data.data));
    }
  }, [data, dispatch, isSuccess]);

  if (isError) {
    throw new Error('An error occurred while fetching posts');
  }

  if (isLoading || isFetching) {
    return <Loading />;
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
