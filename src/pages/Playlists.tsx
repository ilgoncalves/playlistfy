import React, { FC } from 'react';
import { Button, Div, Text } from 'react-native-magnus';
import { Header } from '../components';
import { PLAYLISTS } from './pages.mocks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, SCREENS } from '../interfaces';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '../assets/i18n';
import { usePlaylist } from '../provider';

export const Playlists: FC = ({}) => {
  const { setLists } = usePlaylist();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  const handlePressPlaylist = async (playlistId: number) => {
    setLists(PLAYLISTS);

    navigation.navigate(SCREENS.PLAYLIST_MUSICS, { playlistId });
  };

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Playlists)}</Header>
      <Div px={24}>
        {PLAYLISTS.map(playlist => (
          <Button
            w="100%"
            mb="md"
            bg="gray400"
            rounded="md"
            key={playlist.id}
            onPress={() => handlePressPlaylist(playlist.id)}>
            <Text color="gray900" fontSize={16}>
              {playlist.title}
            </Text>
          </Button>
        ))}
      </Div>
    </Div>
  );
};
