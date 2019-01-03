import React, { Component } from 'react';
import ClickCount from './ClickCount.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    console.log('enter ControlPanel render');
    return (
      <div style={style}>
        <ClickCount caption="First"/>
        <ClickCount caption="Second" initValue={10} />
        <ClickCount caption="Third" initValue={20} />
        <button onClick={ () => this.forceUpdate() }>
          Click me to re-render!
        </button>
      </div>
    );
  }
}

export default ControlPanel;