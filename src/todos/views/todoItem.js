import React, {Component} from 'react'
import {connect} from 'react-redux'

import {toggleTodo, removeTodo} from '../actions'

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.item.completed !== this.props.item.completed) || (nextProps.item.text !== this.props.item.text)
  }
  render() {
    console.log('render', this.props.item.id)
    const {id, completed, text} = this.props.item
    return (
      <li className="todo-item"> 
        <span>{id}</span>
        <input className="toggle" type="checkbox" readOnly checked = {completed}
          onClick={this.props.onToggle} />
        <label className="text">{text}</label>
        <button className="remove" onClick={() => this.props.onRemove(id)}>×</button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggle() {
      dispatch(toggleTodo(ownProps.item.id))
    },
    onRemove() {
      dispatch(removeTodo(ownProps.item.id))
    }
  }
}
export default connect(null, mapDispatchToProps)(TodoItem)
 