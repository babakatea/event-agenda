import React, { useEffect } from 'react';

import { useAppDispatch } from '@/app/store';
import { Header } from '@/components/Header';
import { loadPosts } from '@/entities/posts';
import { useFetchPostsQuery } from '@/shared/api/agenda';
import { PostsList } from '@/widgets/PostsList';

import styles from './Agenda.module.scss';
import { POST_ID } from '@/entities/posts/consts/constants';

export const Agenda = () => {
  const dispatch = useAppDispatch();

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
      <Header />
      <PostsList />
    </div>
  );
};
