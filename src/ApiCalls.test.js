import React from 'react';
import {fetchWines, postWine, deleteWine} from './ApiCalls'

describe('ApiCalls', () => {
  let mockWine;

  beforeEach(() => {
    mockWine = {
      vineyard: 'Fake Vineyard',
      name: 'Fake Name',
      color: 'Red',
      type: 'fake',
      year: 2020,
      rating: 1 
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWine)
      })
    })
  })

  it('should be called with the correct url', async () => {
    const expected = 'https://the-vino-cellar.herokuapp.com/api/v1/vinos';
    fetchWines();
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should return a parsed response', async () => {
    const result = await fetchWines();
    expect(result).toEqual(mockWine)
  })
})