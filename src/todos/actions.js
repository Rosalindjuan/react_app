import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

let nextTodoId = 0

export const addTodo = (text) => {
  console.log(text)
  return {
    type: ADD_TODO,
    completed: false,  // 待办事项是否完成
    id: nextTodoId ++, // 唯一标识
    text: text         // 待办事项的内容
  }
}

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
})