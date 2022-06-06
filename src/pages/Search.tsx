import React, { FC, useMemo, useState } from 'react';
import { Div } from 'react-native-magnus';
import { MusicList } from '../components/organisms';
import { Header, SearchInput } from '../components';
import { TRACKS } from './pages.mocks';
import { debounce } from '../utils';
import { IPlaylist, ITrack } from '../interfaces';
import { ActivityIndicator } from 'react-native';
import { usePlaylist } from '../provider';

export const Search: FC = () => {
  const { setLists } = usePlaylist();
  const SEARCH_PLAYLIST: IPlaylist = {
    id: 18028987,
    items: [],
    title: 'Searched Musics',
  };
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<IPlaylist | null>(null);

  const [loading, setLoading] = useState(false);

  const optimizedSearch = useMemo(
    () => debounce((toSearch: string) => handleSearch(toSearch)),
    [],
  );

  const getMusics = (): Promise<Array<ITrack>> => {
    return new Promise(resolve => {
      setTimeout(() => resolve(TRACKS), 1000);
    });
  };

  const handleSearch = async (toSearch: string) => {
    try {
      console.log(toSearch);
      setLoading(true);
      const response = await getMusics();
      if (response) {
        const playlist = { ...SEARCH_PLAYLIST, items: response };
        setLists([playlist]);
        setSearchResult(playlist);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Div flex={1}>
      <Header>Pesquisar</Header>
      <SearchInput
        mx={24}
        mb={20}
        onChangeText={text => {
          setSearchText(text);
          // @ts-ignore
          optimizedSearch(text);
        }}
        value={searchText}
      />
      {loading ? (
        <Div flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator size="large" color="white" />
        </Div>
      ) : (
        <MusicList playlist={searchResult} />
      )}
    </Div>
  );
};
