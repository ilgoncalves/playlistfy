import { ImageRequireSource } from 'react-native';

export interface ITrack {
  id: string | undefined;
  title: string | undefined;
  artist: string | undefined;
  url: string | number | undefined;
  duration: string | undefined;
  artwork?: string | ImageRequireSource | undefined;
  last?: boolean;
}
