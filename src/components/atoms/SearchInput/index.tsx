import React, { FC } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-magnus';

interface ISearchInputProps {
  onChangeText: ((text: string) => void) | undefined;
  value: string;
}

export const SearchInput: FC<ISearchInputProps> = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" color="gray900" fontFamily="Feather" />
      <TextInput
        placeholderTextColor="#A0AEC0"
        placeholder="Pesquisar musicas, artitas ou playlist"
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        style={styles.input}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderColor: '#A0AEC0',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 36,
  },
  input: {
    flex: 1,
    paddingLeft: 6,
    fontSize: 16,
  },
});
