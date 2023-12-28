import React from 'react';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

import { RootState } from '@/app/store';
import { InnerBlock } from '@/entities/posts/types/types';
import { Post } from '@/features/Post';

import styles from './PostsList.module.scss';

export const PostsList = () => {
  const { filteredPostsList: posts } = useSelector(
    (state: RootState) => state.posts,
  );

  return (
    <div className={styles.container}>
      {posts.map((post: InnerBlock) => (
        <Post key={uuid4()} {...post} />
      ))}
    </div>
  );
};
