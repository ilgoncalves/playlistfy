import TranslationKeyEnum from './translations.keys';
import { EnumDictionary } from '../../interfaces';

const translations: EnumDictionary<TranslationKeyEnum, string> = {
  [TranslationKeyEnum.Home]: 'Início',
  [TranslationKeyEnum.Playlist]: 'Lista de reprodução',
  [TranslationKeyEnum.AppLanguage]: 'Idioma do aplicativo',
  [TranslationKeyEnum.Select]: 'Selecionar',
  [TranslationKeyEnum.Search]: 'Pesquisar',
  [TranslationKeyEnum.DarkTheme]: 'tema escuro',
  [TranslationKeyEnum.LanguageTitle]: 'Selecione seu idioma favorito',
  [TranslationKeyEnum.English]: 'Inglês',
  [TranslationKeyEnum.Portuguese]: 'Português',
  [TranslationKeyEnum.Disable]: 'Desabilitar',
  [TranslationKeyEnum.Artist]: 'Artista',
  [TranslationKeyEnum.Enable]: 'Habilitar',
  [TranslationKeyEnum.SearchInput]: 'Pesquise por musicas ou artistas',
  [TranslationKeyEnum.Playlists]: 'Listas de reprodução',
  [TranslationKeyEnum.WelcomeText]: `Bem vindo ao Playlistify, aqui você vai encontrar todos os estilos musicais para ouvir.
   Vamos começar pesquisando uma música na segunda aba...`,
};

export default { translation: translations };
