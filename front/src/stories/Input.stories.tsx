import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from 'src/ui/Input';

storiesOf('Input', module)
  .add('기본 설정', () => <Input name="basic" />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('onChange Event예제', () => (
    <Input name="name" onChange={action('onChange 테스트')} label="onChange 예제" placeholder="onChange 예제" />
  ))
  .add('Error Message 예제', () => <Input name="name" errorMessage={'Error Message Test'} disabled />);
