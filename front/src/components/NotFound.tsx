import React, { memo } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import Text from '@ui/Text';
import Spacing from '@ui/Spacing';

const NotFound: ({ match }: RouteComponentProps) => JSX.Element = (props) => {
  const { url } = props.match;
  return (
    <React.Fragment>
      <Spacing bottom={2}>
        <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
      </Spacing>
      <Link to="/">메인 페이지로 이동</Link>
    </React.Fragment>
  );
};

export default memo(NotFound);
