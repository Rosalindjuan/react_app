import React, {Component} from 'react';

const styleHOC = (WrappedComponent, style) => {
  return class HOCComponent extends Component {
    render() {
      return (
        <div style={style}>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  };
};

export default styleHOC;