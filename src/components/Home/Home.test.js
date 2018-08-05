/* global describe, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  it('renders without crashing', () => {
    const component = shallow(<Home />);
    expect(component.exists()).toEqual(true);
  });

  // it('has a Sign Up Link when not logged in', () => {
  //   // TODO: Add auth props
  //   const component = shallow(<Home />);
  //   const signupLink = component.getElement('#signup');
  //   expect(signupLink.text).toEqual('Sign Up');
  // });
});
