import React, { FC } from 'react';
import { Button, Div, Icon, Image, Text } from 'react-native-magnus';
import fonts from '../../../shared/theme/fonts';
import { MUSICS } from '../../../pages/pages.mocks';
import { MusicProgressBar } from '../MusicProgressBar';

interface ICurrentTrackOverlayProps {
  setModalOpen: (arg: boolean) => void;
}

export const CurrentTrackOverlay: FC<ICurrentTrackOverlayProps> = ({
  setModalOpen,
}) => {
  const handlePlay = () => {
    setModalOpen(true);
  };

  return (
    <Div
      bg="transparent"
      bottom={90}
      position="absolute"
      w="100%"
      zIndex={1000}>
      <Div
        bg="transparent"
        w="95%"
        h={80}
        shadow="md"
        rounded={10}
        alignSelf="center">
        <Button
          rounded={10}
          onPress={handlePlay}
          alignItems="center"
          px={8}
          h={80}
          flexDir="row"
          bg="blue900">
          <Image h={65} w={65} rounded={10} source={{ uri: MUSICS[0].image }} />
          <Div
            h="100%"
            py={16}
            justifyContent="space-between"
            bg="transparent"
            flex={1}>
            <Div
              px={8}
              bg="transparent"
              flexDir="row"
              alignItems="center"
              justifyContent="space-between">
              <Text
                textShadowRadius={4}
                textShadowColor="black"
                fontSize={18}
                color="gray100"
                fontFamily={fonts.roboto.bold}>
                Vampiro - Matuê
              </Text>
              <Icon
                color="gray100"
                fontFamily="FontAwesome5"
                name="pause"
                fontSize={20}
              />
            </Div>
            <Div bg="transparent" flexDir="row">
              <MusicProgressBar />
            </Div>
          </Div>
        </Button>
      </Div>
    </Div>
  );
};
