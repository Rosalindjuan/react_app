import React, {Component} from 'react'
import {connect} from 'react-redux'

import TransitionGroup from 'react-addons-css-transition-group'

import TodoItem from './todoItem'
import {selectVisibleTodos} from './reselect'

import './todoItem.css'

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <TransitionGroup transitionName="fade" 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={200}>
        {
          this.props.todos.map(item => (
            <TodoItem key={item.id} item={item}/>
          ))
        }
        </TransitionGroup>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state)
  };
}

export default connect(mapStateToProps)(TodoList)
 