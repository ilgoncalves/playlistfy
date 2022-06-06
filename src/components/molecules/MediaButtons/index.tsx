import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Div, Icon } from 'react-native-magnus';
import { iconFontFamilyType } from 'react-native-magnus/lib/typescript/src/ui/icon/icon.type';
import TrackPlayer from 'react-native-track-player';
import { usePlayer } from '../../../provider';

interface IOpacityIconButtonProps {
  onPress?: any;
  name: string;
  fontFamily?: iconFontFamilyType;
  fontSize?: number;
}

export const MediaButtons: FC = () => {
  const { isPlaying } = usePlayer();
  const handlePlayPause = () => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  const onPressNext = async () => {
    TrackPlayer.skipToNext();
  };

  const onPressPrevious = async () => {
    const position = await TrackPlayer.getPosition();

    if (position > 3) {
      TrackPlayer.seekTo(0);
    } else {
      TrackPlayer.skipToPrevious();
    }
  };

  const OpacityIconButton: FC<IOpacityIconButtonProps> = ({
    onPress,
    name,
    fontFamily = 'AntDesign',
    fontSize = 32,
  }) => (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={name}
        fontFamily={fontFamily}
        color="gray100"
        fontSize={fontSize}
      />
    </TouchableOpacity>
  );

  return (
    <Div
      justifyContent="space-evenly"
      bg="transparent"
      flexDir="row"
      alignItems="center">
      <OpacityIconButton name="hearto" />
      <OpacityIconButton
        onPress={() => onPressPrevious()}
        fontFamily="Feather"
        name="skip-back"
      />
      <OpacityIconButton
        onPress={handlePlayPause}
        fontSize={60}
        name={isPlaying ? 'pausecircle' : 'play'}
      />
      <OpacityIconButton
        onPress={onPressNext}
        fontFamily="Feather"
        name="skip-forward"
      />
      <OpacityIconButton name="retweet" />
    </Div>
  );
};
