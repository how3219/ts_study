import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBox from 'src/ui/CheckBox';
import { action } from '@storybook/addon-actions';

storiesOf('CheckBox', module)
  .add('기본 설정', () => <CheckBox name="test"></CheckBox>)
  .add('onChange Event 예제', () => <CheckBox onChange={action('onChange 테스트')} name="test"></CheckBox>);
