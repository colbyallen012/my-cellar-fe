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
})