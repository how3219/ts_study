import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../ui/Heading';

storiesOf('Heading', module)
  .add('기본 p tag', () => <Heading>p태그 입니다.</Heading>)
  .add('h1 tag', () => <Heading level={1}>H1태그 입니다.</Heading>)
  .add('h2 tag', () => <Heading level={2}>H2태그 입니다.</Heading>)
  .add('h3 tag', () => <Heading level={3}>H3태그 입니다.</Heading>)
  .add('h4 tag', () => <Heading level={4}>H4태그 입니다.</Heading>)
  .add('h5 tag', () => <Heading level={5}>H5태그 입니다.</Heading>)
  .add('h6 tag', () => <Heading level={6}>H6태그 입니다.</Heading>);
