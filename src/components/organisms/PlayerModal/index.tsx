import React, { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SlideModal } from '../SlideModal';
import { DisplayMusic, HeaderPlayer } from '../../molecules';

interface IPlayerModalProps {
  isPlayerOpened: boolean;
  setIsPlayerOpened: (isOpen: boolean) => void;
}

export const PlayerModal: FC<IPlayerModalProps> = ({
  setIsPlayerOpened,
  isPlayerOpened,
}) => {
  return (
    <SlideModal
      dismiss={() => setIsPlayerOpened(false)}
      isVisible={isPlayerOpened}>
      <Div bg="#2E4C6D" flex={1}>
        <HeaderPlayer />
        <DisplayMusic isPlayerOpened={isPlayerOpened} />
      </Div>
    </SlideModal>
  );
};
