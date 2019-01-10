import {createSelector} from 'reselect'
import {FilterTypes} from '../../constants'

const getFilter = (state) => state.filter
const getTodos = (state) => state.todos

export const selectVisibleTodos = createSelector(
  [getFilter, getTodos], // 函数数组，每个元素代表了选择器步骤一需要做的映射计算
  (filter, todos) => {
    switch(filter) {
      case FilterTypes.ALL: {
        return todos
      }
      case FilterTypes.COMPLETED: {
        return todos.filter(item => item.completed)
      }
      case FilterTypes.UNCOMPLETED: {
        return todos.filter(item => !item.completed)
      }
      default:
        throw new Error('unsupported filter')
    }
  }
)