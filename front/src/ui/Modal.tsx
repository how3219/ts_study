import React, { memo } from 'react';
import Card from './Card';
import { css, withStyles, Styles } from '../Theme/withStyles';

interface ModalTypes {
  children: React.ReactNode;
  styles: Styles;
  open: boolean;
}
const Modal: ({ children, styles, open }: ModalTypes) => JSX.Element = (props) => {
  const { children, styles, open } = props;
  if (open === undefined) {
    throw new Error('Modal open parameter error');
  }
  if (children === undefined) {
    throw new Error('Modal children undefined error');
  }
  return open ? (
    <div {...css(styles.overlay)}>
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}>
          <Card vertical={2} horizontal={2}>
            {children}
          </Card>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default memo(
  withStyles(() => ({
    overlay: {
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    wrapper: {
      verticalAlign: 'middle',
    },
    container: {
      margin: '40px auto 0px',
      width: 700,
    },
  }))(Modal),
);
