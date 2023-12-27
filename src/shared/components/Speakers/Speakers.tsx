import React from 'react';

import { Speaker } from '@/entities/posts/types/types';

import styles from './Speakers.module.scss';

interface Props {
  speakerList: Speaker[];
  showName?: boolean;
  showPosition?: boolean;
  showLogo?: boolean;
}

export const Speakers = (props: Props) => {
  const {
    speakerList,
    showLogo = true,
    showName = false,
    showPosition = false,
  } = props;

  return (
    <div className={styles.speakersContainer}>
      {speakerList.map(speaker => (
        <div className={styles.speaker} key={speaker.id}>
          <img alt={speaker.image.alt} src={speaker.image.url} />
          {showLogo && (
            <img
              alt="company logo"
              className={styles.logo}
              src={speaker.company_logo[0]?.mediaUrl}
            />
          )}
          {showName && <div className={styles.name}>{speaker.name}</div>}
          {showPosition && (
            <div className={styles.position}>{speaker.position}</div>
          )}
        </div>
      ))}
    </div>
  );
};
