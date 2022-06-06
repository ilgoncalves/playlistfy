import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { Div, Icon, DivProps } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '../../../assets/i18n';
interface ISearchInputProps extends DivProps {
  onChangeText: ((text: string) => void) | undefined;
  value: string;
}

export const SearchInput: FC<ISearchInputProps> = ({
  onChangeText,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <Div
      borderColor="gray200"
      rounded={5}
      px={12}
      borderWidth={1}
      h={36}
      bg="gray100"
      alignItems="center"
      flexDir="row"
      {...props}>
      <Icon name="search" color="gray900" fontFamily="Feather" />
      <TextInput
        placeholderTextColor="#A0AEC0"
        placeholder={t(TranslationsKeys.SearchInput)}
        value={value}
        onChangeText={onChangeText}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1, paddingLeft: 6, fontSize: 16 }}
        autoCorrect={false}
      />
    </Div>
  );
};
