import React, { memo, useEffect, useCallback, useState } from 'react';
import { getTransactions } from '@services/modules/main';
import Card from '@ui/Card';
import Heading from '@ui/Heading';
import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';
import { TransactionsTypes } from '@typings/service/main';
import QueryString from 'query-string';
const TransactionList: () => JSX.Element = () => {
  const [transactions, setTransactions] = useState<TransactionsTypes>([]);
  const getTransactionsList = useCallback(async (paramsdata?: string) => {
    // eslint-disable-next-line no-restricted-globals
    let params = paramsdata ? QueryString.parse(paramsdata) : {};
    const { data } = await getTransactions(params);
    setTransactions(data);
  }, []);

  useEffect(() => {
    getTransactionsList();
  }, [getTransactionsList]);

  return (
    <div>
      <Heading level={3}>거래 현황</Heading>
      <Card vertical={4} horizontal={4}>
        <TransactionSearchFilter getTransactionsList={getTransactionsList} />
      </Card>
      <Card>
        <TransactionTable transactions={transactions} />
      </Card>
      {/* <TransactionPaginationContainer /> */}
    </div>
  );
};

export default memo(TransactionList);
