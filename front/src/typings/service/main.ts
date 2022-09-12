export interface Transactions {
  amount: number;
  code: string;
  currentPrice: number;
  datetime: string;
  id: string;
  name: string;
  totalPrice: number;
}
export type TransactionsTypes = Transactions[] | [];
