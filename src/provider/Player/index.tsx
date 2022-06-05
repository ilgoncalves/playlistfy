import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
  State,
  Capability,
} from 'react-native-track-player';

import { ITrack } from '../../interfaces';

import { Context } from './Context';
import { defaultTrack } from './InitialValue';

const { PlaybackState } = Event;

interface Props {
  children: React.ReactNode;
}

export const PlayerProvider: React.FC<Props> = ({ children }: Props) => {
  const [isReady, setReady] = useState<boolean>(false);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [track, setTrack] = useState<ITrack>(defaultTrack);

  useTrackPlayerEvents([PlaybackState], (event: any) => {
    if (event.type === PlaybackState) {
      if (event.state === State.Playing) {
        setPlaying(true);
      } else if (event.state === State.Paused) {
        setPlaying(false);
      }
    }
  });

  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SeekTo,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      }).then(() => {
        setReady(true);
      });
    });
  }, []);

  useEffect(() => {
    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async () => {
      let trackId = await TrackPlayer.getCurrentTrack();

      let trackObject = await TrackPlayer.getTrack(trackId);

      if (trackObject) {
        const newObj: ITrack = {
          id: trackId.toString(),
          artist: trackObject.artist,
          title: trackObject.title,
          url: trackObject.url,
          artwork: trackObject.artwork,
          duration: '',
        };
        setTrack(newObj);
      }
    });

    AppState.addEventListener('change', async appState => {
      if (appState === 'active') {
        const state = await TrackPlayer.getState();

        setPlaying(state === State.Playing);
      }
    });
  }, []);

  return (
    <Context.Provider
      value={{
        track,
        isReady,
        isPlaying,
        setPlaying,
      }}>
      {children}
    </Context.Provider>
  );
};

export { usePlayer } from './Context';
