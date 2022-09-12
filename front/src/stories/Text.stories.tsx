import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from 'src/ui/Text';

storiesOf('Text', module)
  .add('기본 설정', () => <Text>기본 입니다</Text>)
  .add('xsmall 설정', () => <Text xsmall>xsmall 입니다</Text>)
  .add('small 설정', () => <Text small>small 입니다</Text>)
  .add('medium 설정', () => <Text medium>medium 입니다</Text>)
  .add('large 설정', () => <Text large>large 입니다</Text>)
  .add('xlarge 설정', () => <Text xlarge>xlarge 입니다</Text>)
  .add('primary 설정', () => <Text primary>primary 입니다</Text>)
  .add('secondary 설정', () => <Text secondary>secondary 입니다</Text>)
  .add('gray 설정', () => <Text gray>gray 입니다</Text>)
  .add('error 설정', () => <Text error>error 입니다</Text>)
  .add('bold 설정', () => <Text bold>bold 입니다</Text>)
  .add('light 설정', () => <Text light>light 입니다</Text>);
