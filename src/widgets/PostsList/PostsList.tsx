import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { InnerBlock } from '@/entities/posts/types/types';
import { SmallPost } from '@/features/SmallPost';

import styles from './PostsList.module.scss';

export const PostsList = () => {
  const { postsList } = useSelector((state: RootState) => state.posts);

  console.log('postsList', postsList);

  // TODO: match types of posts by speakerList
  return (
    <div className={styles.container}>
      {postsList.map((post: InnerBlock, index: number) => (
        <SmallPost key={index} {...post} />
      ))}
    </div>
  );
};
