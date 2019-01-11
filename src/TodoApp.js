import React from 'react'
import {view as Todos} from './todos'
import {view as Filter} from './filter'
import CountDown from './inheritance/CountDown'
import Weather from './weather/Weather'
import CitySelector from './weather/CitySelector'

function TodoApp () {
  return (
    <div>
      <Todos />
      <Filter />
      {/* 高阶组件的使用 以函数为子组件 */}
      <CountDown startCount={10}>
        {(count) => (<div>倒计时：{count > 0 ? count : '新年快乐'}</div>)}
      </CountDown>

      <Weather></Weather>
      <CitySelector></CitySelector>
    </div>
  );
}

export default TodoApp