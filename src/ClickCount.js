import React, { Component } from 'react'
// React从V15.5版本就不支持PorpTypes属性了，改到了prop-types里
import PropTypes from 'prop-types'
const buttonStyle = {
  margin: '16px'
}
class ClickCounter extends Component {
  constructor(props) {
    console.log('enter constructor: ' + JSON.stringify(props));
    super(props)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {
      count: props.initValue
    }
    // this.onClickButton = this.onClickButton.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption);
  }

  onClickIncrementButton() {
    this.setState({count: this.state.count + 1});
  }

  onClickDecrementButton() {
    this.setState({count: this.state.count - 1});
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  // onClickButton() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  // ui层面
  render() {
    console.log('enter render ' + this.props.caption);
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    )
  }
}

// PropTypes 验证，若传入的 props type 不符合将会显示错误
ClickCounter.propTypes = {
  caption: PropTypes.string,
  initValue: PropTypes.number
};
// Prop 预设值，若对应 props 没传入值将会使用 default 值
ClickCounter.defaultProps = {
  initValue: 0
};

export default ClickCounter