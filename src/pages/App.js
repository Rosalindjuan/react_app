import React from 'react'
import {Link } from 'react-router-dom'
import Home from './Home'
import About from './Discover'
import NotFound from './NotFound'

const App = (children) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="user">user</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App