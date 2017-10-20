import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/app/components/app';

describe('Component App', function() {
  it('should say Hello World!', function() {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('p').text()).to.have.string("Hello World!");
  });
});
