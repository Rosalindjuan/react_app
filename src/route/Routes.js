import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import createHistory from 'history/createBrowserHistory';

// import App from '../pages/App';
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Discover from '../pages/Discover';
import My from '../pages/My';
import Moments from '../pages/Moments'
import Chat from '../pages/Chat'
// import NotFound from '../pages/NotFound'

import Footer from '../components/Footer'


const history = createHistory()

const Routes = () => (
  <Router history={history}>
    <div className='router'>
      <Route exact path='/'               component={Home}/>
      <Route exact path='/contacts'       component={Contacts}/>
      <Route path="/discover"             component={Discover} />
      <Route path="/my"                   component={My} />
      <Switch>
        <Route path="/moments"                   component={Moments} />
        <Route path="/chat/:id"                   component={Chat} />
        <Footer />
      </Switch>
    </div>
  </Router>
)

export default Routes