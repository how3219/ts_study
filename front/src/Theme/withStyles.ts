import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes, CSSProperties } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(Theme);

type Nullable<T> = T | null | undefined;
interface Styles {
  [key: string]: Nullable<
    CSSProperties & {
      [pseudoSelectorOrMediaQuery: string]: CSSProperties[keyof CSSProperties] | CSSProperties;
    }
  >;
}
export { css, withStyles, withStylesPropTypes, ThemedStyleSheet, Styles };
