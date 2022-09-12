import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../ui/Card';

storiesOf('Card', module)
  .add('기본 설정', () => <Card>Card 기본 설정</Card>)
  .add('spacing 설정', () => (
    <Card vertical={4} horizontal={4}>
      Card 기본 설정
    </Card>
  ));
