interface ISpotifyAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  album_group: string;
  artists: Array<IArtist>;
}

interface IArtist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ISpotifyTrack {
  album: ISpotifyAlbum;
  artists: Array<IArtist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface ISpotifySearchResponse {
  tracks: {
    href: string;
    items: Array<ISpotifyTrack>;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}
