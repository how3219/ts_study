import React from 'react';
import Heading from '../../ui/Heading';
import { shallow } from 'enzyme';
describe('<Heading>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Heading>테스트</Heading>);
    }).not.toThrow();
  });
  it('renders not children throw', () => {
    expect(() => {
      shallow(<Heading children={undefined}></Heading>);
    }).toThrow();
  });
});
