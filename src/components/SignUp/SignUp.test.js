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
    const emailInput = component.find('FormInput').at(1);
    expect(emailInput.type()).toEqual(FormInput);
    expect(emailInput.props().idCore).toEqual('email');
    expect(emailInput.props().labelText).toEqual('Email:');
    expect(emailInput.props().type).toEqual('email');
    expect(emailInput.props().placeholder).toEqual('david@gmail.com');
  });

  it('has a password FormInput', () => {
    const passwordInput = component.find('FormInput').at(2);
    expect(passwordInput.type()).toEqual(FormInput);
    expect(passwordInput.props().idCore).toEqual('password');
    expect(passwordInput.props().labelText).toEqual('Password:');
    expect(passwordInput.props().type).toEqual('password');
    expect(passwordInput.props().placeholder).toEqual('P@ssw0rd');
  });

  it('has a password confirm FormInput', () => {
    const passwordInput = component.find('FormInput').at(3);
    expect(passwordInput.type()).toEqual(FormInput);
    expect(passwordInput.props().idCore).toEqual('password-confirm');
    expect(passwordInput.props().labelText).toEqual('Confirm Password:');
    expect(passwordInput.props().type).toEqual('password');
    expect(passwordInput.props().placeholder).toEqual('P@ssw0rd');
  });

  it('has a submit input', () => {
    const submit = component.find('#submit-button');
    expect(submit.type()).toEqual('input');
    expect(submit.props().value).toEqual('Sign Up');
  });
});
