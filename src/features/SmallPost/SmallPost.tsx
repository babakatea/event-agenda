import React, { useState } from 'react';
import classNames from 'classnames';

import { InnerBlock } from '@/entities/posts/types/types';
import { CardHeader } from '@/shared/components/CardHeader';

import styles from './SmallPost.module.scss';

export const SmallPost = (props: InnerBlock) => {
  const [isHovered, setIsHovered] = useState(false);

  const { speakerList, title, category, startTime } = props.attrs;

  console.log('props', props);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.maxSpeakersContainer]: speakerList.length > 2,
        [styles.twoSpeakersContainer]: speakerList.length === 2,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardHeader category={category} isHovered={isHovered} time={startTime} />
      <div className={styles.description}>{title}</div>
      <div className={styles.speakersContainer}>
        {speakerList.map(speaker => (
          <div className={styles.speaker} key={speaker.id}>
            <img alt={speaker.image.alt} src={speaker.image.url} />
            <img
              alt="company logo"
              className={styles.logo}
              src={speaker.company_logo[0]?.mediaUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
