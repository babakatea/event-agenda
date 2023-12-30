import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

import { ParagraphBlock, Speaker } from '@/entities/posts/types/types';
import { Cross, Plus } from '@/shared/assets/images';
import { Speakers } from '@/shared/components/Speakers';

import styles from './Modal.module.scss';

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  time: string;
  duration: number;
  heading: string;
  title: string;
  description: ParagraphBlock[];
  speakerList: Speaker[];
}

export const Modal = (props: Props) => {
  const {
    isModalOpen,
    closeModal,
    time,
    duration,
    heading,
    title,
    description,
    speakerList,
  } = props;

  const modalRef = React.useRef<HTMLDivElement>(null);

  const onModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, closeModal, handleClickOutside]);

  return (
    <div className={classNames(styles.modal, { [styles.open]: isModalOpen })}>
      <div
        className={styles.modalContent}
        onClick={onModalClick}
        ref={modalRef}
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.time}>
              {time}
              <div className={styles.duration}>| {duration} MIN</div>
            </div>
            <div className={styles.closeButton} onClick={closeModal}>
              close <Cross />
            </div>
          </div>
          <div className={styles.timezone}>Timezone: Europe/Amsterdam</div>
        </div>

        <div className={styles.body}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.title}>{title}</div>
          {description.map((paragraph, index) => (
            <div className={styles.description} key={index}>
              {parse(paragraph.innerHTML)}
            </div>
          ))}
          <div className={styles.calendar}>
            add to calendar <Plus />
          </div>
          <div className={styles.speakers}>
            <div className={styles.heading}>speakers</div>
            <Speakers
              showLogo={false}
              showName={true}
              showPosition={true}
              speakerList={speakerList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
