import React, { FC } from 'react';
import { Button, Icon, Image, Div, Text } from 'react-native-magnus';
import TrackPlayer, { Event, State } from 'react-native-track-player';
import { usePlaylist } from '../../../provider';
import { ITrack } from '../../../interfaces';

interface IMusicCard extends ITrack {
  playlistId: number;
}

export const MusicCard: FC<IMusicCard> = ({
  playlistId,
  artist,
  title,
  artwork,
  id,
}) => {
  const rounded = 'xl';
  const { tracks, active, updateTrackPlayer } = usePlaylist();

  const onPress = async () => {
    console.log(active);
    if (active !== playlistId) {
      console.log('ei');
      await updateTrackPlayer(playlistId);
    }

    const state = await TrackPlayer.getState();
    console.log(
      'MUSIC Id',
      tracks.findIndex(el => el.id === id),
    );
    await TrackPlayer.skip(tracks.findIndex(el => el.id === id));

    if (state !== State.Playing) {
      let subscription = TrackPlayer.addEventListener(
        Event.PlaybackState,
        data => {
          if (data.state === State.Ready) {
            TrackPlayer.play().then(() => {
              subscription.remove();
            });
          }
        },
      );
    }
  };

  return (
    <Div shadow="sm" mb={16} rounded={rounded}>
      <Button onPress={onPress} bg="gray400" rounded={rounded}>
        <Div flex={1} bg="transparent" flexDir="row">
          {/* @ts-ignore */}
          <Image h={72} w={72} rounded={rounded} source={{ uri: artwork }} />
          <Div
            justifyContent="space-between"
            flex={1}
            py={16}
            pl={12}
            bg="transparent">
            <Text color="gray900" fontWeight="bold" fontSize={16}>
              {title}
            </Text>
            <Text color="gray900" fontSize={12}>{`Artista - ${artist}`}</Text>
          </Div>
          <Icon
            name="play"
            color="gray700"
            opacity={0.26}
            fontSize="6xl"
            fontFamily="Feather"
          />
        </Div>
      </Button>
    </Div>
  );
};
