import Button from '@ui/Button';
import Card from '@ui/Card';
import Heading from '@ui/Heading';
import InlineList from '@ui/InlineList';
import React, { memo, Dispatch, SetStateAction, useCallback } from 'react';
import Text from '@ui/Text';
type CoinInfoType = {
  name: string;
  typename: string;
  priceLabel: string;
};
interface CoinDashletTypes {
  name: string;
  priceLabel: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setCoinInfo: Dispatch<SetStateAction<CoinInfoType>>;
}
const CoinDashlet: ({ name, priceLabel, setOpen, setCoinInfo }: CoinDashletTypes) => JSX.Element = (props) => {
  const { name, priceLabel, setOpen, setCoinInfo } = props;
  const onClick = useCallback(
    (typename: string) => {
      let coinInfo = { name, priceLabel, typename };
      setCoinInfo(coinInfo);
      setOpen(true);
    },
    [name, priceLabel, setCoinInfo, setOpen],
  );

  return (
    <Card vertical={4} horizontal={4}>
      <Heading level={4}>
        {name}
        <Text>{priceLabel}</Text>
      </Heading>
      <InlineList spacingBetween={1}>
        <Button primary small onClick={() => onClick('매도')}>
          매도
        </Button>
        <Button small onClick={() => onClick('매수')}>
          매수
        </Button>
      </InlineList>
    </Card>
  );
};

export default memo(CoinDashlet);
