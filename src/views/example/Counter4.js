import React, { Component } from 'react'
// React从V15.5版本就不支持PorpTypes属性了，改到了prop-types里
import PropTypes from 'prop-types'
import * as Actions from '../../Actions.js'
import {connect} from 'react-redux'


const buttonStyle = {
  margin: '16px'
}

// 函数组件
function Counter ({caption, onIncrement, onDecrement, value}) {
  console.log('counter 4')
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  )
} 
Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement() {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement() {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);