import { ITrack } from '~/interfaces';

export const MUSICS: Array<ITrack> = [
  {
    id: '1',
    artwork:
      'https://rapforte.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-21.18.02.jpeg',
    title: 'Vampiro',
    artist: 'Matue',
    duration: '',
    url: '',
  },
  {
    id: '2',
    artwork:
      'https://i1.sndcdn.com/artworks-T2B6wF3krypHEH09-dBGt8Q-t500x500.jpg',
    title: 'Groupies',
    artist: 'Doode',
    duration: '',
    url: '',
  },
  {
    id: '3',
    artwork: 'https://i1.sndcdn.com/artworks-000167710996-vhgos3-t500x500.jpg',
    title: 'Esse cara aqui do lado',
    artist: 'Marilia Mendonça',
    duration: '',
    url: '',
  },
  {
    id: '4',
    artwork:
      'https://rapforte.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-21.18.02.jpeg',
    title: 'Vampiro',
    artist: 'Matue',
    duration: '',
    url: '',
  },
  {
    id: '5',
    artwork:
      'https://rapforte.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-21.18.02.jpeg',
    title: 'Vampiro',
    artist: 'Matue',
    duration: '',
    url: '',
  },
  {
    id: '6',
    artwork:
      'https://rapforte.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-21.18.02.jpeg',
    title: 'Vampiro',
    artist: 'Matue',
    duration: '',
    url: '',
  },
];

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
    title: 'Playlist 1',
    items: [TRACKS[0], TRACKS[2], TRACKS[3]],
  },
];
