import React, { memo, useCallback } from 'react';
import Option from './Option';
import { Size } from '@typings/index';
import { withStyles, css, Styles } from '../Theme/withStyles';
export { Option };

interface SelectType extends Size {
  children: React.ReactElement[];
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  name: string;
  value: string | number;
  onChange?: (value: React.ChangeEvent<HTMLSelectElement>, name: string) => void;
  autoFocus?: boolean;
  styles: Styles;
}
const Select: ({
  children,
  disabled,
  errorMessage,
  label,
  value,
  name,
  large,
  xlarge,
  styles,
  small,
  xsmall,
  onChange,
  autoFocus,
}: SelectType) => JSX.Element = (props) => {
  const {
    children,
    disabled,
    errorMessage,
    label,
    value,
    name,
    large,
    xlarge,
    small,
    styles,
    xsmall,
    onChange = () => {},
  } = props;
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value as unknown as any, name);
    },
    [onChange],
  );

  return (
    <fieldset {...css(styles.wrapper)}>
      <label htmlFor={`input_${name}`} {...css(styles.label, errorMessage && styles.errorLabel)}>
        {errorMessage || label}
      </label>
      <div
        {...css(
          styles.placeholder,
          xsmall && styles.xsmallPadding,
          small && styles.smallPadding,
          large && styles.largePadding,
          xlarge && styles.xlargePadding,
          errorMessage && styles.error,
        )}
      >
        <select
          {...css(
            styles.select,
            xsmall && styles.xsmall,
            small && styles.small,
            large && styles.large,
            xlarge && styles.xlarge,
          )}
          disabled={disabled}
          id={`input_${name}`}
          onChange={handleChange}
          value={value}
        >
          {React.Children.map(children, (child) => React.cloneElement(child, { disabled }))}
        </select>
      </div>
    </fieldset>
  );
};

export default memo(
  withStyles(({ unit, color, size, lineHeight }: any) => ({
    wrapper: {
      border: 0,
      padding: 0,
      position: 'relative',
    },
    label: {
      display: 'block',
      fontSize: size.xs,
      top: 2,
      left: unit * 2,
      cursor: 'pointer',
    },
    placeholder: {
      marginTop: 2,
      border: 1,
      borderColor: color.primary,
      borderStyle: 'solid',
      borderRadius: 4,
      padding: unit * 1.5,
    },
    xlargePadding: {
      padding: unit * 2,
    },
    largePadding: {
      padding: unit * 2,
    },
    smallPadding: {
      padding: unit - 1,
    },
    select: {
      fontSize: size.md,
      lineHeight: lineHeight.md,
      backgroundColor: color.white,
      border: 0,
      outline: 0,
      width: '100%',
    },
    xlarge: {
      fontSize: size.xg,
    },
    large: {
      fontSize: size.lg,
    },
    small: {
      fontSize: size.sm,
    },
    errorLabel: {
      color: color.error,
    },
    error: {
      borderColor: color.error,
    },
  }))(Select),
);
