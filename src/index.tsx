import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Home } from './pages';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
