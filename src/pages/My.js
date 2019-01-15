import React from 'react'
import { List, WhiteSpace } from 'antd-mobile';

const Item = List.Item

class My extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Item
            thumb={<img src="http://pic.qqtn.com/up/2018-1/2018010814374852803.jpg" alt="个人头像" style={{width: 60, height: 60}}/>}
            arrow="horizontal"
            extra={<img src={require('../images/qrcode.svg')} alt="二维码"/>}
            onClick={() => {}}
          >
            <div style={{paddingTop: 25, paddingBottom: 25}}>
              <p>咸鱼</p>
              <p>wechatId: rosalind</p>
            </div>
          </Item>
        </List>
        <WhiteSpace size="sm" />
        <List>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >支付</Item>
        </List>
        <WhiteSpace size="sm" />
        <List>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >收藏</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >相册</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >卡包</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >表情</Item>
        </List>
        <WhiteSpace size="sm" />
        <List>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >设置</Item>
        </List>
      </div>
    )
  }
}

export default My