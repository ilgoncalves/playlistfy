import React, { FC } from 'react';
import { Div, Icon, Text } from 'react-native-magnus';

export const HeaderPlayer: FC = () => {
  return (
    <Div bg="transparent" px={20} py={30} flexDir="row">
      <Icon name="down" color="gray200" fontSize="6xl" fontFamily="AntDesign" />
      <Text px={80} fontSize={30} fontFamily="Roboto-bold">
        Playlistfy
      </Text>
    </Div>
  );
};
