import React, { FC } from 'react';
import { ScrollDiv } from 'react-native-magnus';
import { IPlaylist } from '../../../interfaces';
import { MusicCard } from '../../molecules';

interface IMusicListProps {
  playlist: IPlaylist;
}

export const MusicList: FC<IMusicListProps> = ({ playlist }) => {
  return (
    <ScrollDiv px={24} showsVerticalScrollIndicator={false}>
      {playlist?.items.map(el => {
        return (
          <MusicCard playlistId={playlist.id} key={`music-${el.id}`} {...el} />
        );
      })}
    </ScrollDiv>
  );
};
