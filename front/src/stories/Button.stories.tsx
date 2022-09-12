import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'src/ui/Button';
import { action } from '@storybook/addon-actions';
storiesOf('Button', module)
  .add('기본 설정', () => <Button>Test</Button>)
  .add('disabled 설정', () => <Button disabled>Test</Button>)
  .add('large 설정', () => <Button large>Test</Button>)
  .add('xlarge 설정', () => <Button xlarge>Test</Button>)
  .add('small 설정', () => <Button small>Test</Button>)
  .add('xsmall 설정', () => <Button xsmall>Test</Button>)
  .add('primary 설정', () => <Button primary>Test</Button>)
  .add('secondary 설정', () => <Button secondary>Test</Button>)
  .add('error 설정', () => (
    <Button error background>
      Test
    </Button>
  ))
  .add('onClick Event 예제', () => (
    <Button xsmall onClick={action('onClick 테스트')}>
      Test
    </Button>
  ));
