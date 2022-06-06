import React, { FC, useMemo } from 'react';
import { Div, Image, Text } from 'react-native-magnus';
import fonts from '../../../shared/theme/fonts';
import { MediaButtons } from '../MediaButtons';
import { MusicProgressBar } from '../MusicProgressBar';

import { usePlayer } from '../../../provider';

export const DisplayMusic: FC = () => {
  const { track } = usePlayer();

  const hasNoImage = useMemo(
    () => !track.artwork && typeof track.artwork !== 'string',
    [track],
  );

  return (
    <Div bg="transparent" px={20}>
      {!hasNoImage && (
        <Image
          h={322}
          w={322}
          m={10}
          borderColor="gray100"
          borderWidth={1}
          rounded="xl"
          source={{
            uri: track.artwork,
          }}
        />
      )}
      <Div bg="transparent" pb={20} pt={20}>
        <Text
          textShadowRadius={4}
          textShadowColor="black"
          fontSize={18}
          mb={20}
          color="gray100"
          fontFamily={fonts.roboto.bold}>
          {track.title} - {track.artist}
        </Text>
        <MusicProgressBar />
      </Div>
      <MediaButtons />
    </Div>
  );
};
