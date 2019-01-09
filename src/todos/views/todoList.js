import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {toggleTodo, removeTodo} from '../actions'
import {FilterTypes} from '../../constants'

class TodoList extends Component {
  constructor(props, context) {
    super(...arguments)
  }
  render() {
    return (
      <ul className="todo-list">
        {
          this.props.todos.map(item => (
            <li className="todo-item" key={item.id}> 
              <span>{item.id}</span>
              <input className="toggle" type="checkbox" readOnly checked = {item.completed}
                onClick={() => this.props.onToggleTodo(item.id)} />
              <label className="text">{item.text}</label>
              <button className="remove" onClick={()=>this.props.onRemoveTodo(item.id)}>×</button>
          </li>
          ))
        }
      </ul>
    )
  }
}

const selectvisibleTodos = (todos, filter) => {
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
      return todos
  }
}
const mapStateToProps = (state) => {
  return {
    todos: selectvisibleTodos(state.todos, state.filter)
  };
}


const mapDispatchToProps = {
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
 