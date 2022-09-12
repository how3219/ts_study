import React, { memo } from 'react';
import { constantChk } from '../utils/constantchk';
import { withStyles, css, Styles } from '../Theme/withStyles';
import { Size } from '@typings/index';
type TypeValue = 'text' | 'number' | 'price';
interface InputTypes extends Size {
  name: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  autoFocus?: boolean;
  errorMessage?: string;
  label?: string;
  value?: string | number;
  type?: TypeValue;
  onFocus?: () => {};
  placeholder?: string;
  disabled?: boolean;
  styles: Styles;
}

const Input: ({
  errorMessage,
  label,
  name,
  autoFocus,
  value,
  type,
  disabled,
  placeholder,
  onFocus,
  onChange,
  xsmall,
  small,
  large,
  xlarge,
  styles,
}: InputTypes) => JSX.Element = (props) => {
  const {
    errorMessage,
    label,
    name,
    autoFocus = false,
    value,
    type = 'text',
    disabled = false,
    placeholder,
    onFocus = () => {},
    onChange = () => {},
    xsmall,
    small,
    large,
    xlarge,
    styles,
  } = props;
  if (constantChk(type, ['text', 'number', 'price'])) {
    // eslint-disable-next-line no-throw-literal
    throw new Error('type parameter error');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as unknown as any, name);
  };
  return (
    <fieldset {...css(styles.wrapper)}>
      <label htmlFor={`input_${name}`} {...css(styles.label, errorMessage && styles.errorLabel)}>
        {errorMessage || label}
      </label>
      <input
        id={`input_${name}`}
        {...css(
          styles.input,
          errorMessage && styles.error,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
        )}
        onChange={handleChange}
        onFocus={onFocus}
        value={value}
        autoFocus={autoFocus}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </fieldset>
  );
};
export default memo(
  withStyles(({ depth, unit, color, size, lineHeight }: any) => ({
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
    input: {
      marginTop: 2,
      fontSize: size.md,
      lineHeight: lineHeight.md,
      padding: unit * 1.5,
      border: 1,
      borderColor: color.primary,
      borderStyle: 'solid',
      borderRadius: 4,
      outline: 0,
      ':focus': {
        boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)',
      },
    },
    xlarge: {
      fontSize: size.xg,
    },
    large: {
      fontSize: size.lg,
    },
    small: {
      fontSize: size.sm,
      padding: unit,
    },
    errorLabel: {
      color: color.error,
    },
    error: {
      borderColor: color.error,
    },
  }))(Input),
);
