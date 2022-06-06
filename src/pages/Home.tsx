import React, { createRef, FC } from 'react';
import { Button, Div, DropdownRef, Text } from 'react-native-magnus';
import fonts from '../shared/theme/fonts';
import { Welcoming } from '../assets/svgs';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '../assets/i18n';
import { DarkModeToggle, Header, I18nDropdown } from '../components';

export const Home: FC = ({}) => {
  const dropdownRef = createRef<DropdownRef>();
  const { t } = useTranslation();
  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Home)}</Header>
      <Div px={24}>
        <DarkModeToggle />
        <Div
          my={12}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between">
          <Text fontSize={16}>{t(TranslationsKeys.AppLanguage)}</Text>
          <Button bg="orange700" onPress={() => dropdownRef.current?.open()}>
            {t(TranslationsKeys.Select)}
          </Button>
        </Div>
        <I18nDropdown dropdownRef={dropdownRef} />
        <Welcoming width={397.72474 / 1.2} height={407.127 / 1.2} />
        <Text
          fontFamily={fonts.roboto.italic}
          mt={20}
          textAlign="center"
          fontSize={18}>
          {t(TranslationsKeys.WelcomeText)}
        </Text>
      </Div>
    </Div>
  );
};
