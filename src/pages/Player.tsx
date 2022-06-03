import { ParamListBase, RouteProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';

interface IPlayerProps {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

export const Player: FC<IPlayerProps> = () => {
  return (
    <Div>
      <Text>Player</Text>
    </Div>
  );
};
