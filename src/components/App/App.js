// @flow
import React from 'react';
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from '../Header';

class App extends React.Component<{}> {
  render() {
    return (
      <Header title="PokeData" link="/">
        <LinkContainer to="#pokemon" activeClassName="active">
          <NavItem eventKey={1}>Pokemon</NavItem>
        </LinkContainer>
      </Header>
    );
  }
}

export default App;
