import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const history = createBrowserHistory()

ReactDOM.render(
  <Router 
    history={history}>
    <Routes />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
