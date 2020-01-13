import React from 'react';
import { shallow } from 'enzyme'
import WineForm from './WineForm'

describe('WineForm', () => {
  let wrapper, instance;
  const props = {
    getWines: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<WineForm {...props}/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when handleChange is called', () => {
    const mockEvent = { target: { name: 'vineyard', value: 'Wine Name'} };
    const expected = 'Wine Name';
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('vineyard')).toEqual(expected)
  })

  it('should invoke postWine when handleSubmit is called', () => {
    const currState = {vineyard: 'my vineyard', name: 'my wine', color: 'red', type: 'merlot', year: 1990, rating: 10}
    wrapper.instance().setState(currState)
    wrapper.instance().handleSubmit({preventDefault: jest.fn()})
    expect(wrapper.state('vineyard')).toEqual(currState.vineyard)
  })
})