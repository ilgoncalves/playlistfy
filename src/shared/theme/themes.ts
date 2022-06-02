import { ThemeType } from 'react-native-magnus';
import fonts from './fonts';

type themesNames = 'light' | 'dark';
type MyThemeType = {
  [name in themesNames]: ThemeType;
};
export const themes: MyThemeType = {
  light: {
    name: 'light',
    components: {
      Div: {
        bg: 'gray300',
      },
      Text: {
        fontFamily: fonts.roboto.regular,
        color: 'gray900',
      },
    },
  },
  dark: {
    name: 'dark',
    components: {
      Div: {
        bg: 'gray700',
      },
      Text: {
        fontFamily: fonts.roboto.regular,
        color: 'gray100',
      },
    },
  },
};
