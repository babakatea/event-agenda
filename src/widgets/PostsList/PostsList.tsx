import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { InnerBlock } from '@/entities/posts/types/types';
import { SmallPost } from '@/features/SmallPost';

import styles from './PostsList.module.scss';

export const PostsList = () => {
  const { filteredPostsList: posts } = useSelector(
    (state: RootState) => state.posts,
  );

  return (
    <div className={styles.container}>
      {posts.map((post: InnerBlock, index: number) => (
        <SmallPost key={index} {...post} />
      ))}
    </div>
  );
};
