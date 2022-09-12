import React, { memo } from 'react';
import CoinOverview from '@components/main/CoinOverview';
import TransactionList from '@components/main/TransactionList';

const MainPage = () => {
  return (
    <>
      <CoinOverview />
      <TransactionList />
    </>
  );
};

export default memo(MainPage);
