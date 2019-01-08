import React, { Component } from 'react'
import Counter from './Counter2'
import Summary from './Summary2'

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    console.log('enter ControlPanel render');
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