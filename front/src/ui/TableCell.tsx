import React, { memo } from 'react';
import { withStyles, css, Styles } from '../Theme/withStyles';
import { constantChk } from '../utils/constantchk';
type alignpropType = 'left' | 'center' | 'right';
interface TableSellTypes {
  children: React.ReactNode;
  align?: alignpropType;
  baseline?: boolean;
  isHeader?: boolean;
  styles: Styles;
}
const TableSell: ({ align, baseline, styles, children, isHeader }: TableSellTypes) => JSX.Element = (props) => {
  const { align, baseline = true, styles, children, isHeader = false } = props;
  const Tag = isHeader ? 'th' : 'td';
  if (children === undefined) {
    throw new Error('TableRow children undefined error');
  }
  if (align && constantChk(align, ['left', 'center', 'right'])) {
    throw new Error('Algin parmeter value error');
  }
  return (
    <Tag
      {...css(
        styles.cell,
        isHeader && styles.header,
        !isHeader && baseline && styles.baseline,
        align === 'center' && styles.alignCenter,
        align === 'right' && styles.alignRight,
      )}
    >
      {children}
    </Tag>
  );
};

export default memo(
  withStyles(({ color, unit }: any) => ({
    cell: {
      paddingTop: unit * 4,
      paddingBottom: unit * 4,
      paddingRight: unit * 8,
      paddingLeft: unit * 8,
      backgroundColor: color.white,
      textAlign: 'left',
    },
    header: {
      backgroundColor: color.primary,
      color: color.white,
    },
    baseline: {
      borderBottom: `1px solid ${color.border}`,
    },
    alignCenter: {
      textAlign: 'center',
    },
    alignRight: {
      textAlign: 'right',
    },
  }))(TableSell),
);
