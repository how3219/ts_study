import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from 'src/ui/Loading';

storiesOf('Loading', module).add('기본 설정', () => <Loading isloading />);
