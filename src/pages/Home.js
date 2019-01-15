import React,{Component} from 'react'

import { SwipeAction, List, Badge } from 'antd-mobile'


const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatList: [
        {id: 1, avatar: 'http://img2.woyaogexing.com/2017/10/21/1737b292739f5b0b%21400x400_big.jpg', nickName: 'Rosalind', updateTime: '15:46', msg: 'enenen嗯嗯好的呢', unreadLen: 2},
        {id: 2, avatar: 'http://pic.51yuansu.com/pic3/cover/00/63/25/589bdedf5475d_610.jpg', nickName: 'Rosalind', updateTime: '15:46', msg: 'enenen嗯嗯好的呢', unreadLen: 108}
      ]
    }
  }
  render() {
    if (!this.state.chatList.length) return null
    return (
      <div>
        <List>
          {
            this.state.chatList.map(item => (
              <SwipeAction
                key={item.id}
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                  {
                    text: '标为未读',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                    text: '删除',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
                onOpen={() => console.log('global open')}
                onClose={() => console.log('global close')}>
                <Item
                  thumb={<img src={item.avatar} alt="个人头像" style={{width: 40, height: 40}}/>}
                  extra={item.updateTime} align="top" multipleLine
                  onClick={() => {this.props.history.push('chat/'+item.id)}}>
                  {item.nickName}
                  <Brief>{item.msg}</Brief>
                </Item>
                <div  style={{position: "absolute", left: '55px', top: '13px', transform: 'translate(-50%)'}}>
                  <Badge text={item.unreadLen} overflowCount={99}/>
                </div>
              </SwipeAction>
            ))
          }
        </List>
      </div>
    )
  }
}
export default Home