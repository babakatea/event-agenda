import React from 'react';
import classNames from 'classnames';

import { Speaker } from '@/entities/posts/types/types';
import styles from '@/features/Post/Post.module.scss';

interface Props {
  speakerList: Speaker[];
  title: string;
  isHovered: boolean;
}

export const SpeakerPostContent = (props: Props) => {
  const { speakerList, title, isHovered } = props;

  return (
    <div className={styles.coverImageData}>
      <div className={styles.speakerName}>{speakerList[0].name}</div>
      <div
        className={classNames(styles.description, {
          [styles.hovered]: isHovered,
        })}
      >
        {title}
      </div>
      <div className={styles.footer}>
        <div className={styles.position}>{speakerList[0].position}</div>
        <img
          alt="company logo"
          className={styles.companyLogo}
          src={speakerList[0].company_logo[0]?.mediaUrl}
        />
      </div>
    </div>
  );
};
