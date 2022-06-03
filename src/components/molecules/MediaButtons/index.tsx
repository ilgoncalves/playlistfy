import React, { FC } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Div, Icon } from 'react-native-magnus';
import { iconFontFamilyType } from 'react-native-magnus/lib/typescript/src/ui/icon/icon.type';

interface IOpacityIconButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  name: string;
  fontFamily?: iconFontFamilyType;
  fontSize?: number;
}

export const MediaButtons: FC = () => {
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
      <OpacityIconButton fontFamily="Feather" name="skip-back" />
      <OpacityIconButton fontSize={60} name="play" />
      <OpacityIconButton fontFamily="Feather" name="skip-forward" />
      <OpacityIconButton name="retweet" />
    </Div>
  );
};
