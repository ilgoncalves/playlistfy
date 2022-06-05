import React from 'react';

import { PlaylistProvider } from './Playlist';
import { PlayerProvider } from './Player';
import { ThemeProvider } from 'react-native-magnus';
import { themes } from '../shared/theme/themes';

interface Props {
  children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <PlaylistProvider>
        <PlayerProvider>{children}</PlayerProvider>
      </PlaylistProvider>
    </ThemeProvider>
  );
};

export { usePlayer } from './Player';
export { usePlaylist } from './Playlist';
