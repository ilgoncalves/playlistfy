import React, { createRef, FC } from 'react';
import { Button, Div, DropdownRef, Text } from 'react-native-magnus';
import fonts from '../shared/theme/fonts';
import { Welcoming } from '../assets/svgs';
import { DarkModeToggle, Header, I18nDropdown } from '../components';

export const Home: FC = ({}) => {
  const dropdownRef = createRef<DropdownRef>();
  return (
    <Div flex={1}>
      <Header>Home</Header>
      <Div px={24}>
        <DarkModeToggle />
        <Div
          my={12}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between">
          <Text fontSize={16}>Liguagem do aplicativo</Text>
          <Button bg="orange700" onPress={() => dropdownRef.current?.open()}>
            selecionar
          </Button>
        </Div>
        <I18nDropdown dropdownRef={dropdownRef} />
        <Welcoming width={397.72474 / 1.2} height={407.127 / 1.2} />
        <Text
          fontFamily={fonts.roboto.italic}
          mt={20}
          textAlign="center"
          fontSize={18}>
          Bem vindo ao Playlistfy, aqui você vai encontrar todos os estilos
          musicais para ouvir. Vamos começar pesquisando uma música na segunda
          aba...
        </Text>
      </Div>
    </Div>
  );
};
