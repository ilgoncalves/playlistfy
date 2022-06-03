import React, { FC } from 'react';
import { Div, Image, Text } from 'react-native-magnus';
import fonts from '../../../shared/theme/fonts';
import { MusicProgressBar, MediaButtons } from '../../molecules';

export const DisplayMusic: FC = () => {
  return (
    <Div bg="transparent" px={20}>
      <Image
        h={322}
        w={322}
        m={10}
        borderColor="gray100"
        borderWidth={1}
        rounded="xl"
        source={{
          uri: 'https://rapforte.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-21.18.02.jpeg',
        }}
      />
      <Div bg="transparent" pb={20} pt={20}>
        <Text
          textShadowRadius={4}
          textShadowColor="black"
          fontSize={18}
          mb={20}
          color="gray100"
          fontFamily={fonts.roboto.bold}>
          Vampiro - Matuê
        </Text>
        <MusicProgressBar />
      </Div>
      <MediaButtons />
    </Div>
  );
};
