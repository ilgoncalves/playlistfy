import React, { FC } from 'react';
import { ScrollDiv } from 'react-native-magnus';
import { SearchMusicCard } from '../../molecules';

type MusicType = {
  image: string;
  music: string;
  artist: string;
  id: number;
};

interface IMusicListProps {
  musics: Array<MusicType>;
}

export const MusicList: FC<IMusicListProps> = ({ musics }) => {
  return (
    <ScrollDiv px={24} showsVerticalScrollIndicator={false}>
      {musics.map(el => {
        return (
          <SearchMusicCard
            key={`music-${el.id}`}
            artist={el.artist}
            music={el.music}
            source={el.image}
          />
        );
      })}
    </ScrollDiv>
  );
};
