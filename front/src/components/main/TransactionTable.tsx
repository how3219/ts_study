import Table from '@ui/Table';
import TableBody from '@ui/TableBody';
import TableHead from '@ui/TableHead';
import TableCell from '@ui/TableCell';
import TableRow from '@ui/TableRow';
import React, { memo } from 'react';
import { TransactionsTypes } from '@typings/service/main';
interface TransactionTableTypes {
  transactions: TransactionsTypes;
}
const TransactionTable: ({ transactions }: TransactionTableTypes) => JSX.Element = (props) => {
  const { transactions } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">코인</TableCell>
          <TableCell align="center">시가 총액</TableCell>
          <TableCell align="center">현재 시세</TableCell>
          <TableCell align="right">거래 시간</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="center">{row.totalPrice}</TableCell>
            <TableCell align="center">{row.currentPrice}</TableCell>
            <TableCell align="right">{row.datetime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default memo(TransactionTable);
