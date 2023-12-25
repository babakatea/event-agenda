import React from 'react';

import { InnerBlock } from '@/entities/posts/types/types';
import { CardHeader } from '@/shared/components/CardHeader';

import styles from './SmallPost.module.scss';

export const SmallPost = (props: InnerBlock) => {
  console.log('props', props);

  return (
    <div className={styles.container}>
      <CardHeader
        category={props.attrs.category}
        time={props.attrs.startTime}
      />
      <div className={styles.description}>{props.attrs.title}</div>
      <div className={styles.speakersContainer}>
        {props.attrs.speakerList.map(speaker => (
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
