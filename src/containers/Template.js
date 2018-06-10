import React, { Component } from 'react'
import {Route, Switch} from 'react-router'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavDrawer from '../components/NavDrawer'

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer />
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