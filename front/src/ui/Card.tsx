import React, { memo } from 'react';
import Spacing, { spacingTypes } from './Spacing';
import { withStyles, css, Styles } from '../Theme/withStyles';
interface CardTypes extends spacingTypes {
  children: React.ReactNode;
  styles: Styles;
  readonly spacingProps?: spacingTypes;
}

const Card: ({ children, spacingProps, styles }: CardTypes) => JSX.Element = (props) => {
  const { children, styles, ...spacingProps } = props;
  if (children === undefined) {
    // eslint-disable-next-line no-throw-literal
    throw new Error('Card children undefined error');
  }
  return (
    <div {...css(styles.wrapper)}>
      <Spacing {...spacingProps}>{children}</Spacing>
    </div>
  );
};

export default memo(
  withStyles(({ depth, unit, color }: any) => ({
    wrapper: {
      ...depth.level1,
      borderRadius: unit,
      backgroundColor: color.white,
      display: 'flex',
      overflow: 'hidden',
      marginBottom: unit * 4,
    },
  }))(Card),
);
