import React, { memo } from 'react';
import { withStyles, css, Styles } from '../Theme/withStyles';

interface TableTypes {
  children: React.ReactNode;
  styles: Styles;
}
const Table: ({ children, styles }: TableTypes) => JSX.Element = (props) => {
  const { children, styles } = props;
  return <table {...css(styles.table)}>{children}</table>;
};

export default memo(
  withStyles(({ color, unit }: any) => ({
    table: {
      borderCollapse: 'collapse',
      width: '100%',
    },
  }))(Table),
);
