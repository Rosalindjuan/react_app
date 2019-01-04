import React, { Component } from 'react';
import ClickCount from './ClickCount.js';
import { timingSafeEqual } from 'crypto';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.onCounterUpdate = this.onCounterUpdate.bind(this)
    this.initValues = [0, 10, 20]
    const initSum = this.initValues.reduce((a,b) => a+b, 0)
    this.state = {
      sum: initSum
    }
  }
  onCounterUpdate(newValue, prevValue) {
    const valueChange = newValue - prevValue
    this.setState({
      sum: this.state.sum + valueChange
    })
  }
  render() {
    console.log('enter ControlPanel render');
    return (
      <div style={style}>
        <ClickCount onUpdate={this.onCounterUpdate} caption="First"/>
        <ClickCount onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
        <ClickCount onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
        <button onClick={ () => this.forceUpdate() }>
          点我重新渲染
        </button>
        <br/>
        <div>Total count: {this.state.sum}</div>
        
      </div>
    );
  }
}

export default ControlPanel;