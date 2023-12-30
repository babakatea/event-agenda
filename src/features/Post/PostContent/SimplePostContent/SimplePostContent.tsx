import React from 'react';

import { Speaker } from '@/entities/posts/types/types';
import styles from '@/features/Post/Post.module.scss';
import { Arrow } from '@/shared/assets/images';
import { Speakers } from '@/shared/components/Speakers';

interface Props {
  speakerList: Speaker[];
  title: string;
  openModal: () => void;
}

export const SimplePostContent = (props: Props) => {
  const { speakerList, title, openModal } = props;

  return (
    <>
      <div className={styles.description}>{title}</div>
      <div className={styles.learnMore} onClick={openModal}>
        learn more <Arrow />
      </div>
      <Speakers speakerList={speakerList} />
    </>
  );
};
