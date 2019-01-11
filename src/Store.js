import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
// 处理异步操作  redux-thunk中间件
import thunkMiddleware from 'redux-thunk'

import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'
import {reducer as weatherReducer} from './weather'

// 为了使用chrome插件 react Perf
// import Perf from 'react-addons-perf'

const win = window
// win.Perf = Perf

// reducer组合
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  weather: weatherReducer
})

// redux-immutable-state-invariant 包 提供了redux中间件 能够让redux在每次派发动作之后做一个检查
// 如果发现某个reducer违反了作为一个纯函数的规定擅自修改了参数state，就会给出警告
const middlewares = [thunkMiddleware]
if(process.env.NODE_ENV !== 'production') {
  // middlewares.push(require('redux-immutable-state-invariant')())
}

// storeEnhancers 能够让createStore函数产生的staore对象具有更多更强的功能
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

export default createStore(reducer, {}, storeEnhancers)