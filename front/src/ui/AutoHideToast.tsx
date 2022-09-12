import React, { memo, useState, useEffect } from 'react';
import { withStyles, css, Styles } from '../Theme/withStyles';
import Spacing from './Spacing';
import Text from './Text';
import { debounce } from '../utils/debounce';

interface AutoHideToastTypes {
  warning?: boolean;
  message: string;
  styles: Styles;
}
const AutoHideToast: ({ warning, message, styles }: AutoHideToastTypes) => JSX.Element = (props) => {
  const { warning = false, styles } = props;
  const [message, setMessage] = useState(props.message);
  const resetMessage = () => {
    setMessage('');
  };
  const [hideMessage] = useState(debounce(resetMessage, 4000));

  return message ? (
    <div {...css(styles.overlay)}>
      <div {...css(styles.wrapper, warning && styles.warning)}>
        <Spacing vertical={4} horizontal={8}>
          <Text inverse bold>
            {message}
          </Text>
        </Spacing>
      </div>
    </div>
  ) : (
    <></>
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
  }))(AutoHideToast),
);
