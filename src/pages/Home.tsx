import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SlideModal } from '../components';

export const Home: FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalOpened(true)}>
        <Text>abrir modal</Text>
      </TouchableOpacity>
      <SlideModal
        isVisible={isModalOpened}
        dismiss={() => setIsModalOpened(false)}>
        <View style={styles.modalContent}>
          <Text>content</Text>
        </View>
      </SlideModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  modalContent: {
    flex: 1,
    marginHorizontal: wp(2),
  },
});
