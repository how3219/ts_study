import React, { memo } from 'react';

interface TableBodyTypes {
  children: React.ReactElement[];
}
const TableBody: ({ children }: TableBodyTypes) => JSX.Element = (props) => {
  const { children } = props;
  const { length } = React.Children.toArray(children);
  if (children === undefined) {
    throw new Error('Card children undefined error');
  }
  return (
    <tbody>
      {React.Children.map(children, (child, index) => {
        const baseline = index < length - 1 ? true : false;
        return React.cloneElement(child, { baseline });
      })}
    </tbody>
  );
};

export default memo(TableBody);
