import React, { FC } from 'react';
import { Button, Icon, Image, Div, Text } from 'react-native-magnus';
import TrackPlayer, { Event, State } from 'react-native-track-player';
import { usePlaylist } from '../../../provider';
import { IPlaylist, ITrack } from '../../../interfaces';

interface IMusicCard extends ITrack {
  playslist: IPlaylist;
}

export const MusicCard: FC<IMusicCard> = ({
  playslist,
  artist,
  title,
  artwork,
  id,
}) => {
  const rounded = 'xl';
  const { active, updateTrackPlayer } = usePlaylist();

  const onPress = async () => {
    if (active === -1 || active !== playslist.id) {
      await updateTrackPlayer(playslist.id);
    }

    const state = await TrackPlayer.getState();

    await TrackPlayer.skip(playslist.items.findIndex(el => el.id === id));

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
          <Image h={72} w={72} rounded={rounded} source={{ uri: artwork }} />
          <Div
            justifyContent="space-between"
            flex={1}
            py={16}
            pr={20}
            pl={12}
            bg="transparent">
            <Text
              numberOfLines={2}
              color="gray900"
              fontWeight="bold"
              fontSize={16}>
              {title}
            </Text>
            <Text
              numberOfLines={1}
              color="gray900"
              fontSize={12}>{`Artista - ${artist}`}</Text>
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
