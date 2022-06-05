import React, { FC, useMemo, useState } from 'react';
import { Div } from 'react-native-magnus';
import { MusicList } from '../components/organisms';
import { Header, SearchInput } from '../components';
import { TRACKS } from './pages.mocks';
import { usePlaylist } from '../provider';
import { debounce } from '../utils';

export const Search: FC = () => {
  const { tracks, setTracks } = usePlaylist();
  const [searchText, setSearchText] = useState('');

  const optimizedSearch = useMemo(
    () => debounce((toSeach: string) => handleSearch(toSeach)),
    [],
  );

  const handleSearch = (toSearch: string) => {
    console.log(toSearch);
    setTracks(TRACKS);
  };

  return (
    <Div flex={1}>
      <Div px={24}>
        <Header>Pesquisar</Header>
        <SearchInput
          onChangeText={text => {
            setSearchText(text);
            // @ts-ignore
            optimizedSearch(text);
          }}
          value={searchText}
        />
      </Div>
      <MusicList
        playlist={{
          id: 0,
          items: tracks,
          title: 'Searched Musics',
        }}
      />
    </Div>
  );
};
