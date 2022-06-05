import React, { FC, useState } from 'react';
import Navigation from './navigation';
import { CurrentTrackOverlay, PlayerModal } from './components';
import { Provider } from './provider';

const App: FC = () => {
  const [isPlayerOpened, setIsPlayerOpened] = useState<boolean>(false);

  return (
    <Provider>
      <CurrentTrackOverlay setModalOpen={setIsPlayerOpened} />
      <PlayerModal
        isPlayerOpened={isPlayerOpened}
        setIsPlayerOpened={setIsPlayerOpened}
      />
      <Navigation />
    </Provider>
  );
};

export default App;
