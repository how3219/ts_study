import React, { memo } from 'react';

interface TableHeadTypes {
  children: React.ReactElement;
}
const TableHead: ({ children }: TableHeadTypes) => JSX.Element = (props) => {
  const { children } = props;
  if (children === undefined) {
    throw new Error('TableHead children undefined error');
  }
  return <thead>{React.Children.map(children, (child) => React.cloneElement(child, { isHeader: true }))}</thead>;
};

export default memo(TableHead);
