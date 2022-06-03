import React, { FC, useState } from 'react';
import { Div } from 'react-native-magnus';
import { MusicList } from '../components/organisms';
import { Header, SearchInput } from '../components';
import { MUSICS } from './pages.mocks';

export const Search: FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Div flex={1}>
      <Div px={24}>
        <Header>Pesquisar</Header>
        <SearchInput onChangeText={setSearchText} value={searchText} />
      </Div>
      <MusicList musics={MUSICS} />
    </Div>
  );
};
