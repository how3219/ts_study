import request from '@services/axios';
type ParamsTypes = {
  code?: string;
};
const getTransactions = (params: ParamsTypes = {}) => {
  return request({ url: `/transactions`, params });
};

export { getTransactions };
