import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

const initState = [
]
export default (state = initState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const data = {id: action.id, text: action.text, completed: false}
      console.log('add ', [data, ...state])
      // 这里不能使用push，unshift操作
      // 因为push和unshift会改变原来的数组，reducer必须是一个纯函数，纯函数不能有任何副作用，包括不能修改参数对象
      return [data, ...state]
    }
    case TOGGLE_TODO: {
      // console.log('toggle ')
      // const d = state.map(item => {
      //   if (item.id === action.id) {
      //     return {...item, completed: !item.completed}
      //   } else {
      //     return item
      //   }
      // })
      // console.log('toggle ', d)
      return state.map(item => {
        if (item.id === action.id) {
          console.log()
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter(item => {
        return item.id !== action.id
      })
    }
    default: {
      console.log('default', state)
      return state
    }
  }
}