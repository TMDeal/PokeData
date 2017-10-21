// @flow
import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

import Header from 'components/header';

class App extends React.Component<{}> {
  render() {
    return (
      <div classname="container">
        <Header title="PokeData" link="/">
          <NavItem><NavLink href="#pokemon">Pokemon</NavLink></NavItem>
          <NavItem><NavLink href="#moves">moves</NavLink></NavItem>
        </Header>
      </div>
    );
  }
}

export default App;
