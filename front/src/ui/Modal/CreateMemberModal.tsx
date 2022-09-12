import React, { Dispatch, memo, SetStateAction, useCallback, useState } from 'react';
import Button from '@ui/Button';
import Text from '@ui/Text';
import Input from '@ui/Input';
import Modal from '@ui/Modal';
import Spacing from '@ui/Spacing';
import InlineList from '@ui/InlineList';
interface CreateMemberModalTypes {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const CreateMemberModal: ({ open, setOpen }: CreateMemberModalTypes) => JSX.Element = (props) => {
  const { open, setOpen } = props;
  const [userid, setUserId] = useState('');
  const [userpassword, setUserPassWord] = useState('');
  const onCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const onChangeUserId = useCallback((value: any) => {
    setUserId(value);
  }, []);
  const onChangeUserPassword = useCallback((value: any) => {
    setUserPassWord(value);
  }, []);

  return (
    <Modal open={open}>
      <Spacing horizontal={4} vertical={8}>
        <Text xlarge bold>
          회원 등록
        </Text>
        <Spacing bottom={2}>
          <Input name="userId" label="사용자 아이디" value={userid} onChange={onChangeUserId} />
        </Spacing>
        <Spacing bottom={2}>
          <Input
            name="totalAmount"
            type="number"
            label="자산 총액"
            value={userpassword}
            onChange={onChangeUserPassword}
          />
        </Spacing>
        <InlineList spacingBetween={1}>
          <Button type="submit" primary onClick={onCloseModal}>
            회원 등록
          </Button>
          <Button onClick={onCloseModal}>취소</Button>
        </InlineList>
      </Spacing>
    </Modal>
  );
};

export default memo(CreateMemberModal);
