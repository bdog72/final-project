
import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import Layout from './Layout'
import Home from './Home'
import Seafood from './Seafood'
import Burgers from './Burgers'
import Wings from './Wings'
import Pizza from './Pizza'
import EverythingElse from './EverythingElse'
import Restaurant from './Restaurant'

// import Practice from './Practice'
export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Seafood' component={Seafood} />
        <Route path='/Burgers' component={Burgers} />
        <Route path='/Wings' component={Wings} />
        <Route path='/Pizza' component={Pizza} />
        <Route path='/EverythingElse' component={EverythingElse} />
        <Route path='/restaurant/:slug' component={Restaurant} />
        {/* <Route path='/Practice' component={Practice} /> */}
      </Route>
    </Router>
  }
}
