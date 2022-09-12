import React, { memo } from 'react';
import { css } from '../Theme/withStyles';
import { unit } from '../Theme/Theme';
export interface spacingTypes {
  children: React.ReactNode;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
}

const Spacing: ({ children, top, left, right, bottom, vertical, horizontal }: spacingTypes) => JSX.Element = (
  props,
) => {
  const { children, top, left, right, bottom, vertical, horizontal } = props;
  const computedTop = top ? top : vertical;
  const computedBottom = bottom ? bottom : vertical;
  const computedLeft = left ? left : horizontal;
  const computedRight = right ? right : horizontal;

  const computedStyles = {
    flex: 1,
    ...(computedTop && { marginTop: computedTop * unit }),
    ...(computedBottom && { marginBottom: computedBottom * unit }),
    ...(computedLeft && { marginLeft: computedLeft * unit }),
    ...(computedRight && { marginRight: computedRight * unit }),
  };
  if (children === undefined) {
    throw new Error('Spacing Children error');
  }
  return <div {...css(computedStyles)}>{children}</div>;
};

export default memo(Spacing);
