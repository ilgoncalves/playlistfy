import React, { FC, useContext, useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Div, Text, ThemeContext, Toggle } from 'react-native-magnus';
import { themes } from '../../../shared/theme/themes';

export const DarkModeToggle: FC = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = useMemo(() => theme.name === 'dark', [theme]);

  const onToggle = () => {
    if (isDarkMode) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <TouchableOpacity onPress={onToggle}>
      <Div alignItems="center" flexDir="row" justifyContent="space-between">
        <Text fontSize={16}>
          {isDarkMode ? 'Desabilitar' : 'Habilitar'} tema escuro
        </Text>
        <Toggle
          on={isDarkMode}
          onPress={onToggle}
          bg="gray200"
          circleBg="orange600"
          activeBg="orange700"
          h={30}
          w={60}
        />
      </Div>
    </TouchableOpacity>
  );
};
