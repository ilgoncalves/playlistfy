import React, { FC, useContext } from 'react';
import { Button, Div, Text, ThemeContext } from 'react-native-magnus';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themes } from '../shared/theme/themes';

export const Home: FC = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onToggle = () => {
    if (theme.name === 'dark') {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <Div flex={1}>
      <SafeAreaView>
        <Div>
          <Button onPress={onToggle}>
            <Text color="gray100">Home</Text>
          </Button>
        </Div>
      </SafeAreaView>
    </Div>
  );
};
