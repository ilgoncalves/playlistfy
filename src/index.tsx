import React, { FC } from 'react';
import Navigation from './navigation';
import { CurrentTrackOverlay } from './components';
import { Provider } from './provider';

const App: FC = () => {
  return (
    <Provider>
      <CurrentTrackOverlay />
      <Navigation />
    </Provider>
  );
};

export default App;
