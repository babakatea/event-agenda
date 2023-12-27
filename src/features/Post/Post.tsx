import React, { useState } from 'react';
import classNames from 'classnames';

import { InnerBlock } from '@/entities/posts/types/types';
import { Modal } from '@/features/Modal';
import { CardHeader } from '@/shared/components/CardHeader';
import { Speakers } from '@/shared/components/Speakers';
import { formatTime } from '@/shared/utils/formatTime';

import styles from './Post.module.scss';

export const Post = (props: InnerBlock) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { speakerList, title, category, startTime, duration, coverImage } =
    props.attrs;

  const { innerBlocks } = props;

  const time = formatTime(startTime);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const coverImageStyles = {
    backgroundImage: `url(${coverImage?.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const renderPostContent = () => {
    if (!coverImage) {
      return (
        <>
          <div className={styles.description}>{title}</div>
          <Speakers speakerList={speakerList} />
        </>
      );
    }

    return (
      <div className={styles.coverImageData}>
        <div
          className={classNames(styles.speakerName, {
            [styles.hovered]: isHovered,
          })}
        >
          {speakerList[0].name}
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

  return (
    <div
      className={classNames(styles.container, {
        [styles.hovered]: coverImage && isHovered,
        [styles.twoSpeakersContainer]: !coverImage && speakerList.length === 2,
        [styles.maxSpeakersContainer]: !coverImage && speakerList.length > 2,
      })}
      onClick={openModal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={coverImage && !isHovered ? coverImageStyles : {}}
    >
      <CardHeader
        category={coverImage ? '' : category}
        isCoverImage={!!coverImage}
        isHovered={isHovered}
        time={time}
      />

      {renderPostContent()}

      <Modal
        closeModal={closeModal}
        description={innerBlocks}
        duration={duration}
        heading={category}
        isModalOpen={isModalOpen}
        speakerList={speakerList}
        time={time}
        title={title}
      />
    </div>
  );
};
