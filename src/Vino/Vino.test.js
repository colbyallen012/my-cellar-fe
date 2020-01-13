import React from 'react'
import { shallow } from 'enzyme'
import Vino from './Vino'

describe('Vino', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Vino />)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})