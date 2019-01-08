import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

import store from '../Store'


class Summary extends Component {
  constructor(props) {
    super(props)
    this.state = this.getOwnState()
    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)
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
      <div>Total Count: {this.state.sum}</div>
    )
  }
} 

export default Summary





// function Summary({value}) {
//   return (
//     <div>Total Count: {value}</div>
//   )
// }

// Summary.PropTypes = {
//   value: PropTypes.number.isRequired
// }

// function mapStateToProps(state) {
//   let sum = 0
//   for(const key in state) {
//     if(state.hasOwnProperty(key)) {
//       sum += state[key]
//     }
//   }
//   return {
//     value: sum
//   }
// }

// export default connect(mapStateToProps)(Summary)