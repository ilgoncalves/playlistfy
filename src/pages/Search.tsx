import React, { FC, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Div } from 'react-native-magnus';
import axios from 'axios';
import { SPOTIFY_ACCESS_TOKEN } from '@env';
import { MusicList } from '../components/organisms';
import { Header, SearchInput } from '../components';
import { debounce, timeFormat } from '../utils';
import { IPlaylist, ISpotifySearchResponse, ITrack } from '../interfaces';
import { usePlaylist } from '../provider';

export const Search: FC = () => {
  const { setLists } = usePlaylist();
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<IPlaylist | null>(null);

  const [loading, setLoading] = useState(false);

  const optimizedSearch = useMemo(
    () => debounce((toSearch: string) => handleSearch(toSearch)),
    [],
  );

  const getMusics = async (
    toSearch: string,
  ): Promise<Array<ITrack> | undefined> => {
    try {
      const { data } = await axios.get<ISpotifySearchResponse>(
        `https://api.spotify.com/v1/search?type=track,artist&include_external=audio&limit=40&q=track:${toSearch}+artist:${toSearch}`,
        {
          headers: {
            Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
          },
        },
      );

      return data.tracks.items
        .filter(el => el.type === 'track')
        .map(el => ({
          artist: el.artists[0].name,
          duration: timeFormat((el.duration_ms / 1000) % 60),
          id: el.id,
          title: el.name,
          url: el.preview_url,
          artwork: el.album.images[0].url,
        }))
        .filter(el => el.url && el.artist && el.artwork);
    } catch (error) {}
  };

  const handleSearch = async (toSearch: string) => {
    try {
      setLoading(true);
      const response = await getMusics(toSearch);

      if (response) {
        const playlist: IPlaylist = {
          title: 'Searched Musics',
          id: Math.floor(Math.random() * 100 * 10) + 999,
          items: response,
        };
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
