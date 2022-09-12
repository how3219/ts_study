import React, { memo, useState, useCallback } from 'react';
import { withStyles, css, Styles } from '../Theme/withStyles';
import Heading from '@ui/Heading';
import Button from '@ui/Button';
import CreateMemberModal from '@ui/Modal/CreateMemberModal';
export const HEIGHT = 64;
interface AppNavTypes {
  styles: Styles;
}
const AppNav: ({ styles }: AppNavTypes) => JSX.Element = (props) => {
  const { styles } = props;
  const [open, setOpen] = useState(false);
  const onClick = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div {...css(styles.wrapper)}>
      <CreateMemberModal open={open} setOpen={setOpen} />
      <div {...css(styles.container)}>
        <Heading level={3} inverse>
          간단한 예제 만들기
        </Heading>
        <Button inverse large onClick={onClick}>
          회원 가입
        </Button>
      </div>
    </div>
  );
};

export default memo(
  withStyles(({ color, depth, unit }: any) => ({
    wrapper: {
      ...depth.level1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: HEIGHT - 4,
      backgroundColor: color.primary,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: unit * 2,
      paddingRight: unit * 2,
    },
  }))(AppNav),
);
