import React, { memo } from 'react';

interface TableHeadTypes {
  children: React.ReactElement[];
  isHeader?: boolean;
  baseline?: boolean;
}
const TableRow: ({ children, isHeader, baseline }: TableHeadTypes) => JSX.Element = (props) => {
  const { children, isHeader, baseline } = props;
  if (children === undefined) {
    throw new Error('TableRow children undefined error');
  }
  return <tr>{React.Children.map(children, (child) => React.cloneElement(child, { baseline, isHeader }))}</tr>;
};

export default memo(TableRow);
