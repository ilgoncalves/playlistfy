import React, { FC, useEffect, useState } from 'react';
import { Div, Text } from 'react-native-magnus';
import TrackPlayer from 'react-native-track-player';

import { timeFormat } from '../../../utils';
import { usePlayer } from '../../../provider';

interface IDurationTimeProps {
  time: number;
  isTouching: boolean;
}
let timeout: any;

export const DurationTime: FC<IDurationTimeProps> = ({ time, isTouching }) => {
  const { track } = usePlayer();

  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    clearTimeout(timeout);
    setCurrentPosition();
  }, [track]);

  useEffect(() => {
    if (time) {
      setPosition(time);
    }
  }, [time]);

  useEffect(() => {
    clearTimeout(timeout);

    if (!isTouching) {
      timeout = setTimeout(setCurrentPosition, 1000);
    }
  }, [isTouching]);

  const setCurrentPosition = async () => {
    const p = await TrackPlayer.getPosition();
    const d = await TrackPlayer.getDuration();

    setPosition(p);
    setDuration(d);

    timeout = setTimeout(setCurrentPosition, 1000);
  };

  return (
    <Div
      mt={-8}
      px={2}
      bg="transparent"
      justifyContent="space-between"
      flexDir="row">
      <Text color="gray100">{timeFormat(position)}</Text>
      <Text color="gray100">{timeFormat(duration)}</Text>
    </Div>
  );
};
