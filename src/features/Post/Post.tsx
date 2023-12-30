import React, { useState } from 'react';
import classNames from 'classnames';

import { InnerBlock } from '@/entities/posts/types/types';
import { Modal } from '@/features/Modal';
import { SimplePostContent } from '@/features/Post/PostContent/SimplePostContent';
import { SpeakerPostContent } from '@/features/Post/PostContent/SpeakerPostContent';
import { PostHeader } from '@/shared/components/PostHeader';
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
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  };

  const renderPostContent = () => {
    if (!coverImage) {
      return (
        <SimplePostContent
          openModal={openModal}
          speakerList={speakerList}
          title={title}
        />
      );
    }

    return (
      <SpeakerPostContent
        isHovered={isHovered}
        speakerList={speakerList}
        title={title}
      />
    );
  };

  return (
    <>
      <div
        className={classNames(styles.container, {
          [styles.hovered]: coverImage && isHovered,
          [styles.twoSpeakersContainer]:
            !coverImage && speakerList.length === 2,
          [styles.maxSpeakersContainer]: !coverImage && speakerList.length > 2,
        })}
        onClick={openModal}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={coverImage && !isHovered ? coverImageStyles : {}}
      >
        <PostHeader
          category={coverImage ? '' : category}
          isCoverImage={!!coverImage}
          isHovered={isHovered}
          time={time}
        />

        {renderPostContent()}
      </div>
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
    </>
  );
};
