import React from 'react'
import Link from './link'
import {FilterTypes} from '../../constants'

import './style.css'

const Filters = () => {
  const dataList = []
  for(let key in FilterTypes) {
    if (FilterTypes.hasOwnProperty(key)) {
      dataList.push(<Link filter={FilterTypes[key]} key={key}>{FilterTypes[key]}</Link>)
    }
  }
  return (
    <p className="filters">
      {/* {dataList} */}
      <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
      <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
      <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
    </p>
  )
}

export default Filters