import React, { memo, useState, useCallback } from 'react';
import InlineList from '@ui/InlineList';
import Button from '@ui/Button';
import Text from '@ui/Text';
import Input from '@ui/Input';
import Form from '@ui/Form';
import Select, { Option } from '@ui/Select';
import { useHistory } from 'react-router-dom';
interface TransactionSearchFilterTypes {
  getTransactionsList: (params: string) => void;
}
const TransactionSearchFilter: ({ getTransactionsList }: TransactionSearchFilterTypes) => JSX.Element = (props) => {
  const history = useHistory();
  const { getTransactionsList } = props;
  const [values, setValues] = useState({
    code: '',
    currentPrice_gte: '',
    currentPrice_lte: '',
  });
  const handleSubmit = (e: React.FormEvent, params = {}) => {
    e.preventDefault();
    const querystring = Object.entries(params)
      .filter((entries) => !!entries[1])
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    history.push(`/?${querystring}`);
    getTransactionsList(querystring);
  };
  const onChange = useCallback((value: any, name: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <Form handleSubmit={(e: React.FormEvent) => handleSubmit(e, values)}>
      <InlineList spacingBetween={2} verticalAlign="bottom">
        <Text xlarge bold>
          검색
        </Text>
        <Select name="code" label="코인 코드" value={values['code']} onChange={onChange}>
          <Option label="선택해주세요" value="" />
          <Option label="비트코인(BTX)" value="BTX" />
          <Option label="이더리움(ETH)" value="ETH" />
          <Option label="두잇코인(DOIT)" value="DOIT" />
        </Select>
        <Input name="currentPrice_gte" label="최소 거래가" value={values['currentPrice_gte']} onChange={onChange} />
        <Input name="currentPrice_lte" label="최대 거래가" value={values['currentPrice_lte']} onChange={onChange} />
        <Button type="submit" primary>
          검색
        </Button>
      </InlineList>
    </Form>
  );
};

export default memo(TransactionSearchFilter);
