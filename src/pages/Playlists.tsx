import React, { FC } from 'react';
import { Button, Div } from 'react-native-magnus';
import { Header } from '../components';
import { PLAYLISTS } from './pages.mocks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, SCREENS } from '../interfaces';
import { usePlaylist } from '../provider';

export const Playlists: FC = ({}) => {
  const { setLists } = usePlaylist();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePressPlaylist = async (playlistId: number) => {
    setLists(PLAYLISTS);
    navigation.navigate(SCREENS.PLAYLIST_MUSICS, { playlistId });
  };

  return (
    <Div flex={1}>
      <Header>Playlists</Header>
      <Div px={24}>
        {PLAYLISTS.map(playlist => (
          <Button
            key={playlist.id}
            onPress={() => handlePressPlaylist(playlist.id)}>
            {playlist.title}
          </Button>
        ))}
      </Div>
    </Div>
  );
};
