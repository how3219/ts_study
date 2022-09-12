import React, { memo } from 'react';
import { constantChk } from '@utils/constantchk';
import { withStyles, css, Styles } from '../Theme/withStyles';
import { unit } from '../Theme/Theme';
type alignType = 'left' | 'center' | 'right';
type verticalType = 'top' | 'middle' | 'bottom';
interface InlineListType {
  align?: alignType;
  children: React.ReactNode;
  spacingBetween?: number;
  verticalAlign?: verticalType;
  styles: Styles;
}
const InlineList: ({ align, children, spacingBetween, verticalAlign, styles }: InlineListType) => JSX.Element = (
  props,
) => {
  const { align, children, spacingBetween = 1, verticalAlign, styles } = props;
  if (children === undefined) {
    throw new Error('InlineList Children undefined error');
  }
  if (align && constantChk(align, ['left', 'center', 'right'])) {
    throw new Error('Algin parmeter value error');
  }
  if (verticalAlign && constantChk(verticalAlign, ['top', 'middle', 'bottom'])) {
    throw new Error('verticalAlgin parmeter value error');
  }
  return (
    <div
      {...css(
        styles.wrapper,
        align === 'center' && styles.alignCenter,
        align === 'right' && styles.alignRight,
        verticalAlign === 'top' && styles.verticalAlignTop,
        verticalAlign === 'bottom' && styles.verticalAlignBottom,
      )}
    >
      {React.Children.map(children, (child) => (
        <div {...css({ marginRight: spacingBetween * unit })}>{child}</div>
      ))}
    </div>
  );
};
export default memo(
  withStyles(() => ({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    alignCenter: {
      justifyContent: 'center',
    },
    alignRight: {
      justifyContent: 'flex-end',
    },
    verticalAlignTop: {
      alignItems: 'flex-start',
    },
    verticalAlignBottom: {
      alignItems: 'flex-end',
    },
  }))(InlineList),
);
