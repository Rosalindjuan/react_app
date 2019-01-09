import {createStore, combineReducers, compose, applyMiddleware} from 'redux'

import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'

// import Perf from 'react-addons-perf'


// reducer组合
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

const middlewares = []
// if(process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')())
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f,
)

export default createStore(reducer, {}, storeEnhancers)