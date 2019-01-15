import React,{Component} from 'react'
import styled from 'styled-components'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meName: 'Rosa',
      msgList: [
        {id: 1, avatar: 'http://pic.51yuansu.com/pic3/cover/00/63/25/589bdedf5475d_610.jpg', nickName: 'Rosalind', updateTime: '15:46', msg: 'enenen嗯嗯好的呢'},
        // {id: 2, avatar: 'http://pic.51yuansu.com/pic3/cover/00/63/25/589bdedf5475d_610.jpg', nickName: 'Rosalind', updateTime: '15:46', msg: 'enenen嗯嗯好的呢'},
        // {id: 3, avatar: 'http://pic.51yuansu.com/pic3/cover/00/63/25/589bdedf5475d_610.jpg', nickName: 'Rosa', updateTime: '15:46', msg: 'enenen嗯嗯好的呢woasdf阿卡东风浩荡分 '}
      ]
    }
  }
  render() {
    return (
      <ChatContainer>
        <div className="chat-box clearfix">
        { !this.state.msgList.length ? null: this.state.msgList.map(item => (
          <div key={item.id} className={item.nickName == this.state.meName ? "chat-item clearfix chat-item-right" : "chat-item clearfix chat-item-left"}>
            <div className="chat-avatar">
              <img src={item.avatar} alt=""/>
            </div>
            <div className="chat-msg">{item.msg}</div>
          </div>
        ))}
        </div>
        <InputBar>
          input bar
        </InputBar>
      </ChatContainer>
    )
  }
}
export default Chat

const ChatContainer = styled.div`
  padding-bottom: 1.2rem;
  .chat-item {
    font-size: .37rem;
    padding: .2rem;
    .chat-avatar {
      img {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: .16rem;
      }
    }
    .chat-msg {
      border-radius: .2rem;
      min-height: 1.2rem;
      display: flex;
      align-items:center;
      padding: .2rem;
      max-width: 72%;
      position: relative;
      word-break: break-all;
      line-height: 1.5;
      
    }
    &.chat-item-left {
      .chat-avatar, .chat-msg {
        float: left;
      }
      .chat-msg {
        background: #fff;
        margin-left: .3rem;
        &:before {
          content: '';
          border: .15rem solid #fff;
          border-left-color: transparent;
          border-top-color: transparent;
          border-bottom-color: transparent;
          display: block;
          position: absolute;
          left: -.29rem;
          top: .45rem;
        }
      }
    }
    &.chat-item-right {
      .chat-avatar, .chat-msg {
        float: right;
      }
      .chat-msg {
        margin-right: .3rem;
        background: #9eea6a;
        &:before {
          content: '';
          border: .15rem solid #9eea6a;
          border-right-color: transparent;
          border-top-color: transparent;
          border-bottom-color: transparent;
          display: block;
          position: absolute;
          right: -.29rem;
          top: .45rem;
        }
      }
    }
  }
`

const InputBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  border: 1px solid red;
  background: #fff;
`