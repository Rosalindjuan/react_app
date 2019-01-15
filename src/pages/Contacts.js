import React, {Component} from 'react'

import { WhiteSpace, SearchBar, List, Badge } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;


class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friendList: [
        {id: 1, avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1547454285&di=e69549d8396cf3ad2b183050a45ac885&src=http://img2.woyaogexing.com/2017/10/21/1737b292739f5b0b%21400x400_big.jpg', nickName: 'Rosalind'},
        {id: 2, avatar: 'http://pic.51yuansu.com/pic3/cover/00/63/25/589bdedf5475d_610.jpg', nickName: 'Rosalind'}
      ]
    }
  }
  render() {
    return (
      <div>
        <SearchBar placeholder="Search"/>
        <WhiteSpace/>
        <List>
          <Item
            thumb={<img src='http://pic.51yuansu.com/pic3/cover/00/63/25/589bdedf5475d_610.jpg' alt="个人头像" style={{width: 30, height: 30}}/>}
            extra={<Badge text={2} overflowCount={99} />}
            onClick={() => { this.props.history.push('/addFriendList')}}>
              新的好友
          </Item>
        </List>
        <WhiteSpace/>
        
        <List>
        {this.state.friendList.length && this.state.friendList.map((item, i) => (
          <Item key={item.id}
            thumb={<img src={item.avatar} alt="个人头像" style={{width: 30, height: 30}}/>}
            onClick={() => { this.props.history.push('/friendDesc')}}>
              {item.nickName}
          </Item>
        ))}
        </List>
        {/* <WhiteSpace/>
        <List>
            <Item
                extra={<Badge text={this.props.user.requestFriendMsg.requestLen}
                              overflowCount={99} />}
                arrow={'horizontal'}
                onClick={() => { this.props.history.push('/friendList')}}>
                新的尬友
            </Item>
        </List>
        <WhiteSpace/>
        <List>
            {this.state.friendList.length && this.state.friendList.map((item, i) => (
                <Item
                    thumb={<img onClick={this.toUserMsg.bind(this, item.phone)} src={item.avatar} alt=""/>}
                    key={item.phone}
                    onClick={() => { this.props.history.push(`/chat/${item._id}`)}}
                >{item.remark ? item.remark : item.nickName}</Item>
            ))}
        </List> */}


      </div>
    )
  }
}

export default Contacts