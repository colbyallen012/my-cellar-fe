import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { fetchWines, deleteWine } from '../ApiCalls/ApiCalls'
import * as constants from '../ApiCalls/ApiCalls';


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

  it('should call deleteWine when removeVino is called', async () => {
    constants.deleteWine = jest.fn(() => Promise.resolve([]))
    expect(constants.deleteWine).toHaveBeenCalledTimes(0)
    instance.removeVino()
    expect( constants.deleteWine).toHaveBeenCalledTimes(1)
  })
})