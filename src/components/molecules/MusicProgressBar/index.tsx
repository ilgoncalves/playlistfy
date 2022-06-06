/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect, useState } from 'react';
import { Div } from 'react-native-magnus';
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';
// @ts-ignore
import Slider from 'react-native-smooth-slider';
import { DurationTime } from '../../atoms';

interface IMusicProgressBarProps {}

let timeout: any;

export const MusicProgressBar: FC<IMusicProgressBarProps> = ({}) => {
  const [time, setTime] = useState<number>(0);
  const [isTouching, setTouching] = useState<boolean>(false);
  const [playbackState, setPlaybackState] = useState(null);
  const [slidevalue, setSlidevalue] = useState<number>(0.0);

  useTrackPlayerEvents(
    [Event.PlaybackState, Event.PlaybackError, Event.PlaybackTrackChanged],
    async (event: any) => {
      if (event.type === Event.PlaybackTrackChanged) {
        if (event.nextTrack) {
          setSlidevalue(0);
        }
      } else if (event.type === Event.PlaybackState) {
        setPlaybackState(event.state);
      }
    },
  );

  const setTimePosition = async (value: number, audio: boolean = false) => {
    const tduration = await TrackPlayer.getDuration();

    // console.log(tduration);

    if (tduration) {
      const auxtime = (tduration / 100) * value;
      setTime(auxtime);
      if (audio) {
        await TrackPlayer.seekTo(time);
      }
    }

    setTouching(false);
  };

  useEffect(() => {
    clearTimeout(timeout);
    const isPlaying = playbackState === State.Playing;

    if (!isTouching && isPlaying) {
      timeout = setTimeout(setCurrentPosition, 1000);
    }
  }, [isTouching, playbackState]);

  const setCurrentPosition = async () => {
    const p = await TrackPlayer.getPosition();
    const d = await TrackPlayer.getDuration();

    if (p >= 0 && d) {
      const value = (p * 100) / d;

      setSlidevalue(value);
    }

    timeout = setTimeout(setCurrentPosition, 1000);
  };

  return (
    <Div px={6} bg="transparent" w="100%">
      <Slider
        style={{ height: 28, padding: 0, margin: 2 }}
        minimumValue={0}
        maximumValue={100}
        value={slidevalue}
        step={1}
        thumbStyle={{ width: 10, height: 10, borderRadius: 5 }}
        thumbTintColor="#EDF2F7"
        minimumTrackTintColor="#EDF2F7"
        maximumTrackTintColor="#A0A0A0"
        onSlidingStart={() => setTouching(true)}
        onValueChange={(value: number) => setTimePosition(value, true)}
      />
      <DurationTime isTouching={isTouching} time={time} />
    </Div>
  );
};
