import React, { useState } from 'react';
import TrackPlayer from 'react-native-track-player';

import { IPlaylist, ITrack } from '../../interfaces';

import { Context } from './Context';

export { usePlaylist } from './Context';

interface Props {
  children: React.ReactNode;
}

export const PlaylistProvider: React.FC<Props> = ({ children }: Props) => {
  const [active, setActive] = useState<number>(-1);
  const [lists, setLists] = useState<IPlaylist[]>([]);
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [swipeIndex, setSwipeIndex] = useState<number>(0);

  const updateTrackPlayer = async (currentPlaylistId: number) => {
    setActive(currentPlaylistId);

    const activePlaylist = lists.find(
      playlist => playlist.id === currentPlaylistId,
    );

    console.log('entrou', activePlaylist);
    if (activePlaylist) {
      const activeTracks = activePlaylist.items;
      console.log(activeTracks);

      await TrackPlayer.reset();

      // @ts-ignore
      await TrackPlayer.add(activeTracks);
    }
  };

  return (
    <Context.Provider
      value={{
        active,
        lists,
        tracks,
        swipeIndex,
        setActive,
        setLists,
        setTracks,
        setSwipeIndex,
        updateTrackPlayer,
      }}>
      {children}
    </Context.Provider>
  );
};
