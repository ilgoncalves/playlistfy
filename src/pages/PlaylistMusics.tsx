import React, { FC, useMemo } from 'react';
import { Div } from 'react-native-magnus';
import { usePlaylist } from '../provider';
import { Header, MusicList } from '../components';
import { useRoute } from '@react-navigation/native';

export const PlaylistMusics: FC = ({}) => {
  const { params } = useRoute<any>();
  const { playlistId } = params;
  const { lists } = usePlaylist();

  const currentPlaylist = useMemo(
    () => lists.find(el => el.id === playlistId),
    [playlistId],
  );

  return (
    <Div flex={1}>
      <Header backButton>{`Playlist - ${currentPlaylist?.title}`}</Header>
      <MusicList playlist={currentPlaylist} />
    </Div>
  );
};
