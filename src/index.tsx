import React, { FC, useEffect, useState } from 'react';
import { Div, ThemeProvider, Text } from 'react-native-magnus';
import { themes } from './shared/theme/themes';
import Navigation from './navigation';
import { SetupService } from './services';
import { useCurrentTrack } from './hooks';
import { CurrentTrackOverlay, PlayerModal, SlideModal } from './components';

const App: FC = () => {
  const track = useCurrentTrack();

  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [isPlayerOpened, setIsPlayerOpened] = useState<boolean>(false);

  useEffect(() => {
    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);
    }
    run();
  }, []);

  return (
    <ThemeProvider theme={themes.dark}>
      <CurrentTrackOverlay setModalOpen={setIsPlayerOpened} />
      <PlayerModal
        isPlayerOpened={isPlayerOpened}
        setIsPlayerOpened={setIsPlayerOpened}
      />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
