import React, { createRef, FC } from 'react';
import { Button, Div, DropdownRef, Text } from 'react-native-magnus';
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
      </Div>
    </Div>
  );
};
