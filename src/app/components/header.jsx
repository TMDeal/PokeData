// @flow
import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

type State = {
  isOpen: boolean
}

type Props = {
  title: string,
  link: string,
  children: React.Node
}

export default class Header extends React.Component<Props, State> {
  toggle: () => void;

  constructor(props: Props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let { title, link, children } = this.props;
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">{title}</NavbarBrand>
          <NavbarToggler onclick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav classname="ml-auto" navbar>
              {children}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
