import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

import store from '../Store'


// class Summary extends Component {
//   render() {
//     return (
//       <div>Total Count: {this.state.sum}</div>
//     )
//   }
// } 
function Summary({sum}) {
  return (
    <div>Total Count: {sum}</div>
  )
}
Summary.propTypes = {
  sum: PropTypes.number.isRequired
};


class SummaryContainer  extends Component {
  constructor(props) {
    super(props)
    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = this.getOwnState()
  }
  getOwnState () {
    const state = store.getState()
    let sum = 0
    for(const key in state) {
      if(state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return {sum: sum}
  }
  onChange () {
    this.setState(this.getOwnState())
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum
  }
  componentDidMount() {
    // store.subscribe 监听变化
    store.subscribe(this.onChange)
  }
  componentWillUnmount() {
    // store.unsubscribe 监听取消
    store.unsubscribe(this.onChange)
  }
  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    )
  }
} 

export default SummaryContainer

