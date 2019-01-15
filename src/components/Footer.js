import React, {Component} from 'react'
import { TabBar } from 'antd-mobile'
import {withRouter} from "react-router-dom"
// withRouter高阶组件，提供了history让你使用



class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    console.log(this.props)
    const {pathname} = this.props.location
    const navOption = [
      {
        title: '消息',
        path: '/',
        icon: 'message',
        badge: this.props.unreadMsgCount
      },
      {
        title: '通讯录',
        path: '/contacts',
        icon: 'contacts',
        badge: this.props.unreadConCount
      },
      {
        title: '发现',
        path: '/discover',
        icon: 'discover',
      },
      {
        title: '我',
        path: '/my',
        icon: 'my'
      }
    ]
    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white" hidden={false}>
          {
            navOption.map(item => (
              <TabBar.Item
              title={item.title}
              key={item.icon}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require(`./../images/${item.icon}.svg`)}) center center /  21px 21px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require(`./../images/${item.icon}-active.svg`)}) center center /  21px 21px no-repeat` }}
              />
              }
              selected={pathname === item.path}
              badge={1}
              onPress={() => {
                this.props.history.push(item.path)
              }}
            >
            </TabBar.Item>
            ))
          }
        </TabBar>
      </div>
    )
  }
}


export default withRouter(Footer)