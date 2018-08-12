/* global beforeEach, describe, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignUp from './SignUp';
import FormInput from '../common/FormInput/FormInput';

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

  it('has a name FormInput', () => {
    const nameInput = component.find('FormInput').at(0);
    expect(nameInput.type()).toEqual(FormInput);
    expect(nameInput.props().idCore).toEqual('name');
    expect(nameInput.props().labelText).toEqual('Name:');
    expect(nameInput.props().placeholder).toEqual('David');
  });

  it('has a email FormInput', () => {
    const nameInput = component.find('FormInput').at(1);
    expect(nameInput.type()).toEqual(FormInput);
    expect(nameInput.props().idCore).toEqual('email');
    expect(nameInput.props().labelText).toEqual('Email:');
    expect(nameInput.props().type).toEqual('email');
    expect(nameInput.props().placeholder).toEqual('david@gmail.com');
  });
});
