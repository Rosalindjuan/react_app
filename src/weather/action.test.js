import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import {stub} from 'sinon'

import * as actions from './actions'
import * as actionTypes from './actionTypes'

const middlewares = [thunk]
const createMockStore = configureStore(middlewares)

describe('weather/actions', () => {
  describe('fetchWeather', () => {
    let stubbedFetch
    const store = createMockStore()
    // 通过stub函数篡改函数，第一个参数是一个对象，第二个参数是这个函数的字符串名，返回一个stub对象

    // 一个测试套件的惯常做法就是：在beforeEach中创造stub对象，在afterEach函数中用stub对象的restore方法恢复被篡改函数原本的行为
    beforeEach(() => {
      stubbedFetch = stub(global, 'fetch')
    })
    afterEach(() => {
      stubbedFetch.restore()
    })

    it('should dispatch fetchWeatherSuccess action type on fetch success', () => {
      const mockResponse = Promise.resolve({
        status: 200,
        json:() => Promise.resolve({
          weatherinfo: {}
        })
      })

      stubbedFetch.returns(mockResponse)

      return store.dispatch(actions.fetchWeather(1)).then(() => {
        const dispatchedActions = store.getActions()
        expect(dispatchedActions.length).toBe(2)
        expect(dispatchedActions[0].type).toBe(actionTypes.FETCH_STARTED)
        expect(dispatchedActions[1].type).toBe(actionTypes.FETCH_SUCCESS)
      })
    })
  })
})
