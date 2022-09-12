import React, { Dispatch, memo, SetStateAction, useCallback, useState } from 'react';
import Button from '@ui/Button';
import Text from '@ui/Text';
import Modal from '@ui/Modal';
import InlineList from '@ui/InlineList';
import Form from '@ui/Form';
import Input from '@ui/Input';
import Spacing from '@ui/Spacing';
interface CreateMemberModalTypes {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  name: string;
  typeName: string;
  priceLabel: string;
}
const CreateMemberModal: ({ open, setOpen, name, typeName, priceLabel }: CreateMemberModalTypes) => JSX.Element = (
  props,
) => {
  const { open, setOpen, name, typeName, priceLabel } = props;
  const [cnt, setCnt] = useState(0);
  const onCloseModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const onChangeCnt = useCallback((value: any) => {
    setCnt(value);
  }, []);
  return (
    <Modal open={open}>
      <Form
        handleSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        <Spacing horizontal={4} vertical={8}>
          <Text xlarge bold>
            {name} {typeName}
          </Text>
          <Spacing bottom={2}>
            <Input name="currentPrice" label="금액" value={priceLabel} disabled />
          </Spacing>
          <Spacing bottom={2}>
            <Input name="amount" label="수량" value={cnt} onChange={onChangeCnt} />
          </Spacing>
          <InlineList spacingBetween={1}>
            <Button primary>{typeName}</Button>
            <Button onClick={onCloseModal}>취소</Button>
          </InlineList>
        </Spacing>
      </Form>
    </Modal>
  );
};

export default memo(CreateMemberModal);
