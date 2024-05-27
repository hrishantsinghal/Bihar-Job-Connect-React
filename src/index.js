import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ApplyToJob from './views/apply-to-job'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ApplyToJob} path="**" />
        <Route component={Home} exact path="/" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
