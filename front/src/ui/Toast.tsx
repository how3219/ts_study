import React, { memo } from 'react';
import Spacing from './Spacing';
import Text from './Text';
import { withStyles, css, Styles } from '../Theme/withStyles';
interface ToastTypes {
  message: string;
  warning?: boolean;
  styles: Styles;
}
const Toast: ({ message, warning, styles }: ToastTypes) => JSX.Element = (props) => {
  const { message, warning = false, styles } = props;
  if (message === undefined) {
    throw new Error('Toast message parameter error');
  }
  return (
    <div {...css(styles.overlay)}>
      <div {...css(styles.wrapper, warning && styles.warning)}>
        <Spacing vertical={4} horizontal={8}>
          <Text inverse bold>
            {message}
          </Text>
        </Spacing>
      </div>
    </div>
  );
};
export default memo(
  withStyles(({ depth, unit, color }: any) => ({
    overlay: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      margin: unit * 4,
    },
    wrapper: {
      ...depth.level1,
      borderRadius: unit,
      backgroundColor: color.secondary,
      paddingTop: unit * 2,
      paddingBottom: unit * 2,
      paddingRight: unit * 4,
      paddingLeft: unit * 4,
      marginBottom: unit * 4,
    },
    warning: {
      backgroundColor: color.error,
    },
  }))(Toast),
);
