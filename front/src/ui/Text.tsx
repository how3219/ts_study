import React, { memo } from 'react';
import { Color, Size, Weight } from '@typings/index';
import { withStyles, css, Styles } from '../Theme/withStyles';
interface TextTypes extends Color, Size, Weight {
  children?: React.ReactNode;
  disabled?: boolean;
  lineheight?: boolean;
  styles: Styles;
}
const Text: ({
  children,
  bold,
  light,
  large,
  xlarge,
  medium,
  small,
  xsmall,
  primary,
  secondary,
  inverse,
  gray,
  error,
  lineheight,
  styles,
}: TextTypes) => JSX.Element = (props) => {
  const {
    children,
    bold = false,
    light = false,
    large = false,
    xlarge = false,
    small = false,
    xsmall = false,
    primary = false,
    secondary = false,
    inverse = false,
    styles,
  } = props;

  if (children === undefined) {
    // eslint-disable-next-line no-throw-literal
    throw new Error('children undefined error');
  }
  return (
    <span
      {...css(
        styles.default,
        xsmall && styles.xsmall,
        small && styles.small,
        large && styles.large,
        xlarge && styles.xlarge,
        secondary && styles.secondary,
        primary && styles.primary,
        bold && styles.bold,
        light && styles.light,
        inverse && styles.inverse,
      )}
    >
      {children}
    </span>
  );
};
export default memo(
  withStyles(({ color, fontWeight, size, lineHeight }: any) => ({
    default: {
      color: color.default,
      fontSize: size.md,
      lineHeight: lineHeight.md,
      fontWeight: fontWeight.normal,
    },
    xlarge: {
      fontSize: size.xg,
      lineHeight: lineHeight.xg,
    },
    large: {
      fontSize: size.lg,
      lineHeight: lineHeight.lg,
    },
    small: {
      fontSize: size.sm,
      lineHeight: lineHeight.sm,
    },
    xsmall: {
      fontSize: size.xs,
      lineHeight: lineHeight.xs,
    },
    primary: {
      color: color.primary,
    },
    secondary: {
      color: color.secondary,
    },
    light: {
      fontWeight: fontWeight.light,
    },
    bold: {
      fontWeight: fontWeight.bold,
    },
    inverse: {
      color: color.white,
    },
  }))(Text),
);
