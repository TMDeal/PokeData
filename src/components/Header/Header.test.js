import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from 'material-ui/MenuItem';
import Header from './Header';

let component;

beforeEach(() => {
  component = shallow(
    <Header>
      <MenuItem>Test</MenuItem>
    </Header>
  );
})

it('renders without crashing', () => {
  shallow(<Header/>);
});

it('should close the drawer when a link in the drawer is pressed', () => {
  expect(component).toHaveState('drawerIsOpen');

  component.setState({
    drawerIsOpen: true
  });

  expect(component).toHaveState('drawerIsOpen', true);

  let testItem = component.find(MenuItem);
  expect(testItem).toBeDefined();

  testItem.simulate('click');
  expect(component).toHaveState('drawerIsOpen', false);
})
