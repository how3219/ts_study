import React, { useState, memo } from 'react';
import { withStyles, css, Styles } from '../Theme/withStyles';
type tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
interface HeadingType {
  children: React.ReactNode;
  level?: number;
  styles: Styles;
  inverse?: boolean;
}

const headingTags: tags[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const Heading: ({ children, level, styles, inverse }: HeadingType) => JSX.Element = (props) => {
  const { children, level = 7, styles, inverse } = props;
  const [HeadingTag] = useState(headingTags[level - 1]);
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(HeadingTag, props, children);
  if (children === undefined) {
    throw new Error('Heading children undefined error');
  }
  return <Heading {...css(styles.default, styles[`level${level}`], inverse && styles.inverse)}>{children}</Heading>;
};
export default memo(
  withStyles(({ color, fontWeight, size, lineHeight, unit }: any) => ({
    default: {
      lineHeight: lineHeight.lg,
      fontWeight: fontWeight.bold,
    },
    inverse: {
      color: color.white,
    },
    level1: {
      fontSize: size.h1,
      marginTop: unit * 2,
      marginBottom: unit * 4,
    },
    level2: {
      fontSize: size.h2,
      marginTop: unit * 2,
      marginBottom: unit * 4,
    },
    level3: {
      fontSize: size.h3,
      marginTop: unit * 1.5,
      marginBottom: unit * 3,
    },
    level4: {
      fontSize: size.xg,
      marginTop: unit,
      marginBottom: unit * 2,
    },
    level5: {
      fontSize: size.md,
      marginTop: unit,
      marginBottom: unit * 2,
    },
    level6: {
      fontSize: size.md,
      marginTop: unit,
      marginBottom: unit,
    },
  }))(Heading),
);
