import React, { memo } from 'react';
import { withStyles, css, Styles } from '../Theme/withStyles';
import AppNav, { HEIGHT } from './AppNav';

interface AppLayoutTypes {
  children: React.ReactNode;
  styles: Styles;
}

const AppLayout: ({ children, styles }: AppLayoutTypes) => JSX.Element = (props) => {
  const { children, styles } = props;
  if (children === undefined) {
    // eslint-disable-next-line no-throw-literal
    throw new Error('AppLayout children undefined error');
  }
  return (
    <div {...css(styles.wrapper)}>
      <AppNav />
      <div {...css(styles.body)}>{children}</div>
    </div>
  );
};

export default memo(
  withStyles(({ unit }: any) => ({
    wrapper: {
      marginTop: HEIGHT,
    },
    body: {
      padding: unit * 4,
    },
  }))(AppLayout),
);
