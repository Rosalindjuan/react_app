import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      value: ''
    }
  }
  onInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  onSubmit(ev) {
    ev.preventDefault();
    if(!this.state.value.trim()) {
      return;
    }
    this.props.onAdd(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" className="new-todo" 
            onChange={this.onInputChange} value={this.state.value}/>
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd(text) {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
 