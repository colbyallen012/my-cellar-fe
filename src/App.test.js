import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { fetchWines } from './ApiCalls'
import * as constants from './ApiCalls';


describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call fetchWines when getWines is called', async () => {
    constants.fetchWines = jest.fn(() => 
    Promise.resolve([]))
    expect(constants.fetchWines).toHaveBeenCalledTimes(0)
    await instance.getWines()
    expect(constants.fetchWines).toHaveBeenCalledTimes(1)
  })
})