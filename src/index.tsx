import React, { FC } from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { themes } from './shared/theme/themes';
import Navigation from './navigation';

const App: FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
