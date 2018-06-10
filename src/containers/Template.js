import React, { Component } from 'react'
import {Route, Switch} from 'react-router'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
          <h1>Morpion</h1>
          <RaisedButton primary={true} label={'Test Button'} />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template