import React from 'react';
import {connect} from 'react-redux'

function Summary({sum}) {
  return (
    <div>Total Count: {sum}</div>
  )
}

function mapStateToProps(state) {
  let sum = 0
  for(const key in state){
    if(state.hasOwnProperty(key)) {
      sum += state[key]
    }
  }
  return {sum: sum}
}

export default connect(mapStateToProps)(Summary)

