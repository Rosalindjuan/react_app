import React, { Component } from 'react'
import Counter from './Counter3'
import Summary from './Summary3'

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second" />
        <Counter caption="Third" />
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;