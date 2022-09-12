import React, { memo } from 'react';
interface FormType {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent) => void;
}
const Form: ({ children, handleSubmit }: FormType) => JSX.Element = (props) => {
  const { children, handleSubmit } = props;
  if (children === undefined) {
    throw new Error('Card children undefined error');
  }
  return <form onSubmit={handleSubmit}>{children}</form>;
};
export default memo(Form);
