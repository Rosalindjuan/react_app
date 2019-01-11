import React from 'react';
import {mount, configure } from 'enzyme';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16'

import {reducer as todosReducer, actions} from '../index.js';
import {reducer as filterReducer} from '../../filter/index';
import {FilterTypes} from '../../constants'
import TodoList from './TodoList'
// import TodoItem from './todoItem'

configure({ adapter: new Adapter() })

describe('todos', () => {
  it('should add new todo-item on addTodo action', () => {
    const store = createStore(
      combineReducers({
        todos: todosReducer,
        filter: filterReducer
      }), {
        todos: [],
        filter: FilterTypes.ALL
      });
    const subject = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const wrapper = mount(subject);

    store.dispatch(actions.addTodo('write more test'));

    expect(wrapper.find('.text').text()).toEqual('write more test');
  });

});
// describe('todos',() => {
//   it('should add new todo-item on addTodo action', () => {
//     const store = createStore(
//       combineReducers({
//         todos: todosReducer,
//         filter: filterReducer
//       }), {
//         todos: [],
//         filter: FilterTypes.ALL
//       }
//     )
//     const subject = (
//       <Provider store={store}>
//         <TodoList/>
//       </Provider>
//     )
//     const wrapper = mount(subject)
//     store.dispatch(actions.addTodo('write more test'))
//     console.log(wrapper.find('.text').text)
//     expect(wrapper.find('.text').text).toEqual('write more test');
//     // expect(wrapper.find('.text').text).toEqual('write more test')
//   })
// })