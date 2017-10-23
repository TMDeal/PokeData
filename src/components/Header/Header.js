// @flow
import * as React from 'react';
import {
  withRouter,
  type ContextRouter
} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './Header.css';

type Props = ContextRouter;

class Header extends React.Component<Props, {}> {
  handleTitleClick: () => void;

  constructor(props) {
    super(props)

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick() {
    this.props.history.push('/');
  }

  render() {
    return (
      <AppBar
        title={<span className='title'>PokeData</span>}
        onTitleTouchTap={this.handleTitleClick}
        iconElementRight={<IconButton><MoreVertIcon/></IconButton>}
      />
    );
  }
}

export default withRouter(Header);
