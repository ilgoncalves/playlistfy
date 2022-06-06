export const enum SCREENS {
  HOME = 'Home',
  HOME_TAB = 'HomeTab',
  SEARCH = 'Search',
  PLAYLISTS = 'Playlists',
  PLAYLIST_MUSICS = 'PlaylistMusics',
  PLAYLIST_STACK = 'PlaylistStack',
}

export type RootStackParamList = {
  [SCREENS.HOME_TAB]: undefined;
  [SCREENS.PLAYLIST_MUSICS]: { playlistId: number };
  [SCREENS.PLAYLISTS]: undefined;
};
