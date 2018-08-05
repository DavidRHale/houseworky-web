/* global beforeEach, describe, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';

import Nav from './Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Nav', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Nav />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a nav element', () => {
    expect(component.type()).toEqual('nav');
  });

  it('has a Sign Up Link when not logged in', () => {
    // TODO: Add auth props
    const signupLink = component.find('#signup');
    expect(signupLink.type()).toEqual(Link);
  });
});
