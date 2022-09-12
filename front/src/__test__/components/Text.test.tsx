import React from 'react';
import Text from '../../ui/Text';
import { shallow } from 'enzyme';
describe('<Text>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });
  it('renders not children Throw Error', () => {
    expect(() => {
      shallow(<Text></Text>);
    }).toThrow();
  });
});
