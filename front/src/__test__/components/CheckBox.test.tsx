import React from 'react';
import CheckBox from '../../ui/CheckBox';
import { shallow } from 'enzyme';

describe('<CheckBox>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<CheckBox name="required"></CheckBox>);
    }).not.toThrow();
  });
  it('has one element', () => {
    const wrapper = shallow(<CheckBox name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
  it('renders one input', () => {
    const wrapper = shallow(<CheckBox name="test_name" />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
  });
  it('calls back onChange on checkbox is clicked', () => {
    const changeStub = jest.fn();
    expect(changeStub).toHaveBeenCalledTimes(0);
    const wrapper = shallow(<CheckBox onChange={changeStub} name="test_name" />);
    //shallow 얕은 랜더링 컴포넌트안에 다른 컴포넌트가 없을시 사용해도 되는듯
    //mount 컴포넌트에 다른 컴포넌트가 있어 깊은 렌더링이 필요할때 사용
    expect(wrapper).toHaveLength(1); //객체에 .length 속성이 있고 특정 숫자 값으로 설정 되어 있는지 확인하십시오 .
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
    wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith(true);
    wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: false } }); //래퍼의 루트 노드에서 이벤트를 시뮬레이션합니다. 단일 노드 래퍼여야 합니다.
    expect(changeStub).toHaveBeenCalledTimes(2); //사용 하여 모의 함수가 정확한 횟수를 호출했는지 확인 하십시오 .
    expect(changeStub).toHaveBeenCalledWith(false);
    //특정 인수로 모의 함수가 호출되었는지 확인 하려면 .toHaveBeenCalledWith 를 사용하십시오. .toEqual 이 사용 하는 것과 동일한 알고리즘으로 확인됩니다 .
  });
});
