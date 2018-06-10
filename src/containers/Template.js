import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavDrawer from '../components/NavDrawer'
import {Main, Header} from '../styled/Template'

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer />
          <Header>
            TicTacToe Nangui
          </Header>
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template