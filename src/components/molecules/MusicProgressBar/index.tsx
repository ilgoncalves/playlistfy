import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';

import Slider from '@react-native-community/slider';

interface IMusicProgressBarProps {}

export const MusicProgressBar: FC<IMusicProgressBarProps> = ({}) => {
  return (
    <Div px={4} bg="transparent" w="100%">
      <Slider
        style={{ height: 28, padding: 0, margin: 0 }}
        minimumValue={0}
        maximumValue={1}
        value={0.5}
        thumbTintColor="#EDF2F7"
        minimumTrackTintColor="#EDF2F7"
        maximumTrackTintColor="#A0A0A0"
        onSlidingStart={() => {}}
        onSlidingComplete={() => {}}
      />
      <Div
        mt={-8}
        px={2}
        bg="transparent"
        justifyContent="space-between"
        flexDir="row">
        <Text color="gray100">1:02</Text>
        <Text color="gray100">3:15</Text>
      </Div>
    </Div>
  );
};
