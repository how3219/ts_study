import React from 'react';
import Loading from '../../ui/Loading';
import { shallow } from 'enzyme';

describe('<Loading>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Loading isloading />);
    }).not.toThrow();
  });
  it('renders circle prograss', () => {
    const wrapper = shallow(<Loading isloading />);
    expect(wrapper.find('.circular')).toHaveLength(1);
    wrapper.setProps({ isloading: false });
    expect(wrapper.find('.circular')).toHaveLength(0);
  });
});
