// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import Header from '../Header';

class App extends React.Component<{}> {
  render() {
    return (
      <div className='container'>
        <Header>
          <MenuItem
            containerElement={<NavLink to='#pokemon'></NavLink>}
          >
            Pokemon
          </MenuItem>
          <MenuItem
            containerElement={<NavLink to='#moves'></NavLink>}
          >
            Moves
          </MenuItem>
        </Header>
      </div>
    );
  }
}

export default App;
