import React, { FC } from 'react';
import { Button, Icon, Image, Div, Text } from 'react-native-magnus';

interface ISearchMusicCardProps {
  source: string;
  music: string;
  artist: string;
}

export const SearchMusicCard: FC<ISearchMusicCardProps> = ({
  source,
  music,
  artist,
}) => {
  const rounded = 'xl';
  return (
    <Div shadow="sm" mb={16} rounded={rounded}>
      <Button bg="gray400" rounded={rounded}>
        <Div flex={1} bg="transparent" flexDir="row">
          <Image h={72} w={72} rounded={rounded} source={{ uri: source }} />
          <Div
            justifyContent="space-between"
            flex={1}
            py={16}
            pl={12}
            bg="transparent">
            <Text color="gray900" fontWeight="bold" fontSize={16}>
              {music}
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
