export interface ITrack {
  id: string | undefined;
  title: string | undefined;
  artist: string | undefined;
  url: string | number | undefined;
  duration: string | undefined;
  artwork?: string | undefined;
  last?: boolean;
}
