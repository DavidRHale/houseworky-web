/* global beforeEach, describe, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignUp from './SignUp';

Enzyme.configure({ adapter: new Adapter() });

describe('SignUp', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SignUp />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('has an h1', () => {
    expect(component.find('h1').text()).toEqual('Sign Up');
  });

  it('has a form', () => {
    expect(component.find('form').length).toEqual(1);
  });

  it('has a name input field', () => {
    const nameInput = component.find('#name-input-wrapper');
    expect(nameInput.type()).toEqual('div');
    expect(nameInput.find('input').length).toEqual(1);
    expect(nameInput.find('label').length).toEqual(1);
    expect(nameInput.find('label').text()).toEqual('Name:');
  });
});
