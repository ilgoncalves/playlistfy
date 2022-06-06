import { ITrack } from '../interfaces';

export const TRACKS: Array<ITrack> = [
  {
    id: '12341',
    title: 'Dont Stop Me Now',
    artist: 'Queen',
    duration: '03:32',
    url: require('../sounds/dontstopmenow.mp3'),
    artwork: 'https://i1.sndcdn.com/artworks-000106033438-w6gnwk-t500x500.jpg',
  },
  {
    id: '1241245',
    title: 'Counting Stars',
    artist: 'OneRepublic',
    duration: '04:18',
    url: require('../sounds/countingstars.mp3'),
    artwork: 'https://i.scdn.co/image/ab67616d00001e02f5eaf1b4d675b763303a127b',
  },
  {
    id: '16419405301750',
    title: 'Grenade',
    artist: 'Bruno Mars',
    duration: '03:50',
    url: require('../sounds/grenade.mp3'),
    artwork:
      'https://upload.wikimedia.org/wikipedia/pt/3/36/BrunoMarsGrenade.jpg',
  },
  {
    id: '78654',
    title: 'Another Brick In The Wall',
    artist: 'Pink Floyd',
    duration: '03:56',
    url: require('../sounds/anotherbrickinthewall.mp3'),
    artwork: 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf',
  },
];

export const PLAYLISTS = [
  {
    id: 1,
    title: 'Pop',
    items: [TRACKS[1], TRACKS[2]],
  },
  {
    id: 2,
    title: 'Rock',
    items: [TRACKS[0], TRACKS[3]],
  },
];
