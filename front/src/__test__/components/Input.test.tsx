import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../ui/Input';
import { shallow } from 'enzyme';

describe('<Input>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="test_name" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
  });
  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
  it('renders one input', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
  });
  it('assigns the prop value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    expect(wrapper.find('input').prop('value')).toBe(expectedValue);
    const { type, value } = wrapper.find('input').props();
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
    wrapper.setProps({ type: 'number' });
    expect(wrapper.find('input').prop('type')).toBe('number');
    expect(() => {
      wrapper.setProps({ type: 'invalid type' });
    }).toThrow();
  });
});
