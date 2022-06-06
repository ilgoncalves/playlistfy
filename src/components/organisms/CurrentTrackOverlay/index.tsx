import React, { FC, useMemo, useState } from 'react';
import { Button, Div, Icon, Image, Text } from 'react-native-magnus';
import fonts from '../../../shared/theme/fonts';
import { MusicProgressBar } from '../../molecules/MusicProgressBar';
import { usePlayer } from '../../../provider';
import { TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { PlayerModal } from '../PlayerModal';

interface ICurrentTrackOverlayProps {}

export const CurrentTrackOverlay: FC<ICurrentTrackOverlayProps> = ({}) => {
  const { track, isReady, isPlaying } = usePlayer();
  const [modalOpen, setModalOpen] = useState(false);

  const hasNoImage = useMemo(
    () => !track.artwork && typeof track.artwork !== 'string',
    [track],
  );

  const hideCurrentTrack = useMemo(
    () => !isReady || hasNoImage,
    [isPlaying, isReady, hasNoImage],
  );

  const handlePause = () => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <>
      <PlayerModal
        isPlayerOpened={modalOpen}
        setIsPlayerOpened={setModalOpen}
      />
      <Div
        bg="transparent"
        bottom={90}
        position="absolute"
        w="100%"
        zIndex={1000}>
        {!hideCurrentTrack && (
          <Div
            bg="transparent"
            w="95%"
            h={80}
            shadow="md"
            rounded={10}
            alignSelf="center">
            <Button
              rounded={10}
              onPress={() => setModalOpen(true)}
              alignItems="center"
              px={8}
              h={80}
              flexDir="row"
              bg="blue900">
              {!hasNoImage && (
                <Image
                  h={65}
                  w={65}
                  rounded={10}
                  source={{ uri: track.artwork }}
                />
              )}
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
                    numberOfLines={1}
                    pr={20}
                    fontSize={18}
                    ellipsizeMode="tail"
                    color="gray100"
                    fontFamily={fonts.roboto.bold}>
                    {track?.title}
                    {' | '}
                    {track?.artist}
                  </Text>
                  <TouchableOpacity onPress={handlePause}>
                    <Icon
                      color="gray100"
                      fontFamily="FontAwesome5"
                      name={isPlaying ? 'pause' : 'play'}
                      fontSize={20}
                    />
                  </TouchableOpacity>
                </Div>
                {!modalOpen && <MusicProgressBar />}
              </Div>
            </Button>
          </Div>
        )}
      </Div>
    </>
  );
};
