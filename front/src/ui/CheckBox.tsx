import React, { memo } from 'react';

interface CheckBoxTypes {
  name?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox: ({ checked, name, onChange }: CheckBoxTypes) => JSX.Element = (props) => {
  const { checked, name, onChange = () => {} } = props;
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked as unknown as any);
  };

  return (
    <div className="checkbox-wrapper">
      <div className="checkbox">
        <input id={name} type="checkbox" checked={checked} onChange={handleClick} />
        <label htmlFor={name} className="border-red border"></label>
      </div>
    </div>
  );
};

export default memo(CheckBox);
