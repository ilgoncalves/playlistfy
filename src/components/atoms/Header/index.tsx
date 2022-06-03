import React, { FC } from 'react';
import { Text } from 'react-native-magnus';
import { SafeAreaView } from 'react-native-safe-area-context';
import fonts from '../../../shared/theme/fonts';

interface IHeaderProps {
  children: string;
}

export const Header: FC<IHeaderProps> = ({ children }) => {
  return (
    <SafeAreaView>
      <Text fontWeight="bold" fontFamily={fonts.roboto.bold} fontSize={24}>
        {children}
      </Text>
    </SafeAreaView>
  );
};
