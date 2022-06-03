import React, { FC } from 'react';
import { Text } from 'react-native-magnus';
import { SlideModal } from '../SlideModal';

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
      <Text>teste</Text>
    </SlideModal>
  );
};
