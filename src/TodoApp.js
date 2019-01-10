import React from 'react'
import {view as Todos} from './todos'
import {view as Filter} from './filter'
import CountDown from './inheritance/CountDown'

function TodoApp () {
  return (
    <div>
      <Todos />
      <Filter />
      {/* 高阶组件的使用 以函数为子组件 */}
      <CountDown startCount={10}>
        {(count) => (<div>倒计时：{count > 0 ? count : '新年快乐'}</div>)}
      </CountDown>
    </div>
  );
}

export default TodoApp