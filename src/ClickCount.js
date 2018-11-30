import React, {Component} from 'react'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.onClickButton = this.onClickButton.bind(this)
  }
  onClickButton() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const conterStyle = {
      margin: '16px'
    }
    return (
      <div style={conterStyle}>
        <button onClick={this.onClickButton}>点击</button>
        <div>点击次数:{this.state.count}</div>
      </div>
    )
  }
}

export default ClickCounter