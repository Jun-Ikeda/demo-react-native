import { DefaultTheme as DefaultThemeOriginal, DarkTheme as DarkThemeOriginal } from 'react-native-paper';
import { merge } from 'lodash';

import { Theme } from '../interface';
import Color from './Color';

const primary = Color.green[4];
const accent = Color.green[7];

const light: Theme = merge(
  DefaultThemeOriginal,
  { colors: { primary, accent, background: Color.white[2] } },
);

const dark: Theme = merge(DarkThemeOriginal,
  {
    colors: {
      primary,
      accent,
      background: Color.black[5],
      text: Color.white[2],
      surface: Color.black[6],
    },
  });

export default { light, dark };
export { light, dark };
