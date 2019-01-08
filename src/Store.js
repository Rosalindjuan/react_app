// store文件 输出全局唯一的store
import {createStore} from 'redux'
import reducer from './Reducer'

// 状态的初始值
const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
}

const store = createStore(reducer, initValues)

export default store
