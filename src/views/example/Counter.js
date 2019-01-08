import React, { Component } from 'react'
// React从V15.5版本就不支持PorpTypes属性了，改到了prop-types里
// import PropTypes from 'prop-types'
import * as Actions from '../../Actions.js'
// import {connect} from 'react-redux'

import store from '../Store'


const buttonStyle = {
  margin: '16px'
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = this.getOwnState()
    this.onChange = this.onChange.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
  }
  getOwnState () {
    return {
      value: store.getState()[this.props.caption]
    }
  }
  onChange () {
    this.setState(this.getOwnState())
  }
  componentDidMount() {
    // store.subscribe 监听变化
    store.subscribe(this.onChange)
  }
  componentWillUnmount() {
    // store.unsubscribe 监听取消
    store.unsubscribe(this.onChange)
  }
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption))
  }
  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption))
  }
  render() {
    const value = this.state.value
    const {caption} = this.props
    return (
      <div>
        <button style={buttonStyle} onClick={this.onIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    )
  }
} 

export default Counter














// function Counter({caption, onIncrement, onDecrement, value}) {
//   return (
//     <div>
//       <button style={buttonStyle} onClick={onIncrement}>+</button>
//       <button style={buttonStyle} onClick={onDecrement}>-</button>
//       <span>{caption} count: {value}</span>
//     </div>
//   )
// }


// // PropTypes 验证，若传入的 props type 不符合将会显示错误
// Counter.propTypes = {
//   caption: PropTypes.string.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
//   value: PropTypes.number.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   // state 就是redux里面的数据
//   return {
//     value: state[ownProps.caption]
//   }
// }

// function mapDispatchToProps(dispatch, ownProps) {
//   console.log('ownProps', ownProps)
//   return {
//     onIncrement: (() => {
//       dispatch(Actions.increment(ownProps.caption))
//     }),
//     onDecrement: (() => {
//       dispatch(Actions.decrement(ownProps.caption))
//     })
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);