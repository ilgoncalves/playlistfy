/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect, useState } from 'react';
import { Div, Text } from 'react-native-magnus';

import { useProgress } from 'react-native-track-player';

import Slider from '@react-native-community/slider';
import { timeFormat } from '../../../utils';

interface IMusicProgressBarProps {}

export const MusicProgressBar: FC<IMusicProgressBarProps> = ({}) => {
  const [slidevalue, setSlidevalue] = useState<number>(0.0);
  const { duration, position } = useProgress();

  useEffect(() => {
    if (position > 0) {
      setSlidevalue((position * 100) / duration);
    }
  }, [position, duration]);

  return (
    <Div px={4} bg="transparent" w="100%">
      <Slider
        style={{ height: 28, padding: 0, margin: 0 }}
        minimumValue={0}
        maximumValue={100}
        value={slidevalue}
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
        <Text color="gray100">{timeFormat(position)}</Text>
        <Text color="gray100">{timeFormat(duration)}</Text>
      </Div>
    </Div>
  );
};
