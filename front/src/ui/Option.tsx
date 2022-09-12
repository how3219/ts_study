import React, { memo } from 'react';

interface OptionTypes {
  value: string | number;
  disable?: boolean;
  label?: string;
}
const Option: ({ value, disable, label }: OptionTypes) => JSX.Element = (props) => {
  const { value, disable, label } = props;
  if (value === undefined) {
    throw new Error('Option value parameter error');
  }
  return (
    <option value={value} disabled={disable}>
      {label || value}
    </option>
  );
};

export default memo(Option);
