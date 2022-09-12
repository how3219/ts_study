import React, { memo } from 'react';
import { Color, Size } from '@typings/index';
import { withStyles, css, Styles } from '../Theme/withStyles';
import { type } from 'os';
interface ButtonTypes extends Color, Size {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  background?: boolean;
  onClick?: () => void;
  styles: Styles;
}

const Button: ({
  children,
  disabled,
  type,
  large,
  xlarge,
  small,
  xsmall,
  primary,
  secondary,
  styles,
  onClick,
}: ButtonTypes) => JSX.Element = (props) => {
  const {
    children,
    disabled,
    type = 'button',
    styles,
    large = false,
    xlarge = false,
    small = false,
    xsmall = false,
    primary = false,
    secondary = false,
    onClick = () => {},
  } = props;
  if (children === undefined) {
    // eslint-disable-next-line no-throw-literal
    throw new Error('children undefined error');
  }
  return (
    <button
      {...css(
        styles.default,
        xsmall && styles.xsmall,
        small && styles.small,
        large && styles.large,
        xlarge && styles.xlarge,
        secondary && styles.secondary,
        primary && styles.primary,
        disabled && styles.disabled,
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default memo(
  withStyles(({ color, size, unit, depth, fontWeight }: any) => ({
    default: {
      ...depth.level1,
      border: 1,
      borderStyle: 'solid',
      borderColor: color.default,
      borderRadius: unit,
      color: color.default,
      fontSize: size.md,
      fontWeight: fontWeight.bold,
      padding: unit * 2,
      paddingLeft: unit * 4,
      paddingRight: unit * 4,
      outline: 0,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: color.grayLight,
      },
      ':focus': {
        boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)',
      },
    },
    xlarge: {
      fontSize: size.xg,
      padding: unit * 2.5,
    },
    large: {
      fontSize: size.lg,
      padding: unit * 2.5,
    },
    small: {
      fontSize: size.sm,
      padding: unit * 1.5,
    },
    xsmall: {
      fontSize: size.xs,
      padding: unit,
    },
    primary: {
      borderColor: color.primary,
      color: color.white,
      backgroundColor: color.primary,
      ':hover': {
        backgroundColor: color.primaryDark,
      },
    },
    secondary: {
      borderColor: color.secondary,
      color: color.secondary,
    },
    disabled: {
      borderColor: color.grayDark,
      color: color.grayLight,
      cursor: 'default',
      opacity: 0.5,
      backgroundColor: color.gray,
      ':hover': {
        backgroundColor: color.gray,
      },
    },
  }))(Button),
);
