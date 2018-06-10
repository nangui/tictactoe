import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import {NavToggleButton} from '../styled/NavDrawer'

class NavDrawer extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      open: true,
      width: 250
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <div>
        <NavToggleButton 
          toggle={this.toggle}
          width= {this.state.width}
          open={this.state.open}
        />
        <Drawer 
          open={this.state.open}
          width={this.state.width}
        >
          <div
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'violet'
            }}
          >
            LoginContainer
          </div>
          <Divider />
          <Link to={'/'}>
            <MenuItem 
              onClick={this.toggle}
              primaryText={'Play'}
            />
          </Link>
          <Link to={'/profile'}>
            <MenuItem 
              onClick={this.toggle}
              primaryText={'Profile'}
            />
          </Link>
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer