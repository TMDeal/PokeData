// @flow
import * as React from 'react';
import { type ContextRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './Header.css';

type Props = ContextRouter & {
  children: React.ChildrenArray<React.Element<typeof MenuItem>>
};

type State = {
  drawerIsOpen: boolean
}

class Header extends React.Component<Props, State> {
  handleTitleClick: () => void;
  handleMenuClick: () => void;

  state = {
    drawerIsOpen: false
  };

  constructor(props: Props) {
    super(props)

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleTitleClick() {
    this.props.history.push('/');
  }

  handleMenuClick() {
    this.setState({
      drawerIsOpen: !this.state.drawerIsOpen
    });
  }

  render() {
    let items = React.Children.map(this.props.children, (child) => {
      return (
        <MenuItem
          onClick={this.handleMenuClick}
          {...child.props}
        />
      )
    })
    return (
      <div>
        <AppBar
          title={<span className='title'>PokeData</span>}
          onTitleTouchTap={this.handleTitleClick}
          onLeftIconButtonTouchTap={this.handleMenuClick}
          iconElementRight={<IconButton><MoreVertIcon/></IconButton>}
        />
        <Drawer
          open={this.state.drawerIsOpen}
          width={200}
          docked={false}
          onRequestChange={this.handleMenuClick}
        >
          {items}
        </Drawer>
      </div>
    );
  }
}

export default Header;
// export { Header as PureHeader };
