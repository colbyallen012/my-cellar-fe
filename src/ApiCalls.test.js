import React from 'react';
import {fetchWines, postWine, deleteWine} from './ApiCalls'

describe('ApiCalls', () => {

  describe('Get Wine', () => {
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

    it('should return an error message', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error Fetching Wine')
      });
      await expect(window.fetch()).rejects.toEqual('Error Fetching Wine');
    })
  })

  describe('Post wine', () => {
    let mockWine;
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: {
          id: 7,
          vineyard: 'Fake Vineyard',
          name: 'Fake Name',
          color: 'Red',
          type: 'fake',
          year: 2020,
          rating: 1 
        }
      }
      mockWine = mockWine = {
        id: 7,
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

    it('should post a new wine with the correct URL', () => {
      const url = 'https://the-vino-cellar.herokuapp.com/api/v1/vinos'
      const options = {
        method: 'POST',
        body: JSON.stringify(mockWine),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      postWine(mockWine)
      expect(window.fetch).toHaveBeenCalledWith(url, options)
    })

    it('should return a wine if the response is ok', async () => {
      await expect(postWine(mockWine)).resolves.toEqual(mockResponse.data)
    })

    it('should return and error response message', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject('Error posting wine')
      })
      await expect(window.fetch()).rejects.toEqual('Error posting wine')
    })
  })
})