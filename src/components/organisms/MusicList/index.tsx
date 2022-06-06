import React, { FC } from 'react';
import { ScrollDiv } from 'react-native-magnus';
import { IPlaylist } from '../../../interfaces';
import { MusicCard } from '../../molecules';

interface IMusicListProps {
  playlist: IPlaylist | undefined | null;
}

export const MusicList: FC<IMusicListProps> = ({ playlist }) => {
  return (
    <ScrollDiv pb={50} px={24} showsVerticalScrollIndicator={false}>
      {playlist?.items.map(el => {
        return (
          <MusicCard playslist={playlist} key={`music-${el.id}`} {...el} />
        );
      })}
    </ScrollDiv>
  );
};
