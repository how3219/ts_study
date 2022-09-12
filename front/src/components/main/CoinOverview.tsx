import React, { memo, useState, useCallback } from 'react';
import Heading from '@ui/Heading';
import InlineList from '@ui/InlineList';
import CoinDashlet from './CoinDashlet';
import TradingModal from '@ui/Modal/TradingModal';

const CoinOverview: () => JSX.Element = () => {
  const [open, setOpen] = useState(false);
  const [coinInfo, setCoinInfo] = useState({ name: '', typename: '', priceLabel: '' });

  return (
    <>
      <TradingModal
        open={open}
        setOpen={setOpen}
        name={coinInfo.name}
        typeName={coinInfo.typename}
        priceLabel={coinInfo.priceLabel}
      />
      <Heading level={3}>코인 동향</Heading>
      <InlineList>
        <CoinDashlet name="비트코인" priceLabel="4,216,000원" setOpen={setOpen} setCoinInfo={setCoinInfo} />
        <CoinDashlet name="이더리움" priceLabel="216,000원" setOpen={setOpen} setCoinInfo={setCoinInfo} />
        <CoinDashlet name="두잇코인" priceLabel="25,000원" setOpen={setOpen} setCoinInfo={setCoinInfo} />
      </InlineList>
    </>
  );
};

export default memo(CoinOverview);
