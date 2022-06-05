import { ITrack } from './Player';

export interface IPlaylist {
  id: number;
  title: string;
  items: Array<ITrack>;
}
