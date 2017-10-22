// @flow
import * as React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';

type Props = {
  title: string,
  link: string,
  children: React.Node
};

class Header extends React.Component<Props, {}> {
  render() {
    const { title, link, children } = this.props;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={link}>{title}</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {children}
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
