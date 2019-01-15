import React from 'react'
import { List, WhiteSpace } from 'antd-mobile';

const Item = List.Item
class Discover extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {this.props.history.push('moments')}}
          >朋友圈</Item>
        </List>
        <WhiteSpace size="sm" />
      </div>
    )
  }
}

export default Discover