import React, { FC } from 'react';
import { Div } from 'react-native-magnus';
import { DarkModeToggle, Header } from '../components';

export const Home: FC = ({}) => {
  return (
    <Div flex={1}>
      <Header>Home</Header>
      <Div px={24}>
        <DarkModeToggle />
      </Div>
    </Div>
  );
};
