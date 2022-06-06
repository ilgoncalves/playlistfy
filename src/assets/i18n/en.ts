import TranslationKeyEnum from './translations.keys';
import { EnumDictionary } from '../../interfaces';

const translations: EnumDictionary<TranslationKeyEnum, string> = {
  [TranslationKeyEnum.Home]: 'Home',
  [TranslationKeyEnum.Playlist]: 'Playlist',
  [TranslationKeyEnum.AppLanguage]: 'App Language',
  [TranslationKeyEnum.Select]: 'Select',
  [TranslationKeyEnum.Search]: 'Search',
  [TranslationKeyEnum.DarkTheme]: 'dark theme',
  [TranslationKeyEnum.LanguageTitle]: 'Select your favorite language',
  [TranslationKeyEnum.English]: 'English',
  [TranslationKeyEnum.Portuguese]: 'Portuguese',
  [TranslationKeyEnum.Disable]: 'Disable',
  [TranslationKeyEnum.Artist]: 'Artist',
  [TranslationKeyEnum.Enable]: 'Enable',
  [TranslationKeyEnum.Playlists]: 'Select',
  [TranslationKeyEnum.SearchInput]: 'Search by songs or artists',
  [TranslationKeyEnum.WelcomeText]: `Welcome to Playlistify, here you will find all styles of music to listen to.
  Let's start by searching for a song in the second tab...`,
};

export default { translation: translations };
