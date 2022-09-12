import React from 'react';
import Button from '../../ui/Button';
import { shallow } from 'enzyme';
describe('<Button>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Button>테스트</Button>);
    }).not.toThrow();
  });
  it('renders not children throw', () => {
    expect(() => {
      shallow(<Button children={undefined}></Button>);
    }).toThrow();
  });
  it('calls back onClick on button is clicked', () => {
    const clickFn = jest.fn();
    expect(clickFn).toHaveBeenCalledTimes(0);
    const wrapper = shallow(<Button onClick={clickFn}>TEST</Button>);
    wrapper.find('button').simulate('click');
    expect(clickFn.mock.calls.length).toEqual(1);
  });
});
