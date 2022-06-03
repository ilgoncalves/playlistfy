import React, { FC, useContext } from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Button, Div, Image, Text, ThemeContext } from 'react-native-magnus';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import { useCurrentTrack, useOnTogglePlayback } from '../hooks';
import { themes } from '../shared/theme/themes';

export const Home: FC = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const track = useCurrentTrack();

  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const isLoading = state === State.Connecting || state === State.Buffering;

  const onTogglePlayback = useOnTogglePlayback();

  const onToggle = () => {
    if (theme.name === 'dark') {
      setTheme(themes.light);
      StatusBar.setBarStyle('dark-content');
    } else {
      setTheme(themes.dark);
      StatusBar.setBarStyle('light-content');
    }
  };

  const teste = [
    {
      url: 'https://p.scdn.co/mp3-preview/84f2095442cb0cd3ad7edf56c575fcbd59b29d53?cid=774b29d4f13844c495f206cafdad9c86',
      title: 'Pure (Demo)',
      artist: 'David Chavez',
      artwork: '',
      duration: 28,
    },
    {
      url: 'https://p.scdn.co/mp3-preview/4c0bf380fa5d6f6a41c2de12b5320ae93406322c?cid=774b29d4f13844c495f206cafdad9c86',
      title: 'Pure (Demo)',
      artist: 'David Chavez',
      artwork: '',
      duration: 28,
    },
  ];

  const addToPlayer = music => {
    TrackPlayer.stop().then(() => {
      TrackPlayer.add(music).then(() => {
        onTogglePlayback();
      });
    });
  };

  return (
    <Div flex={1}>
      <SafeAreaView>
        <Div>
          {teste.map(el => (
            <Button onPress={onToggle} key={el.url}>
              <Text color="gray100">Home</Text>
            </Button>
          ))}
        </Div>
      </SafeAreaView>
    </Div>
  );
};
