/* global beforeEach, describe, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormInput from './FormInput';

Enzyme.configure({ adapter: new Adapter() });

describe('Form Input', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <FormInput
        labelText="Email:"
        type="email"
        placeholder="dave@gmail.com"
        idCore="email"
      />,
    );
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a div', () => {
    expect(component.type()).toEqual('div');
  });

  it('should set id based on the id passed by props', () => {
    expect(component.props().id).toEqual('email-input-wrapper');
  });

  it('should have a label', () => {
    expect(component.find('label').length).toEqual(1);
  });

  it('should render label text passed through props', () => {
    expect(component.find('label').text()).toEqual('Email:');
  });

  it('should set htmlFor based on the id passed by props', () => {
    expect(component.find('label').props().htmlFor).toEqual('email-input');
  });

  it('should have an input', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('should set id based on the id passed by props', () => {
    expect(component.find('input').props().id).toEqual('email-input');
  });

  it('should have an input type passed by props', () => {
    expect(component.find('input').props().type).toEqual('email');
  });

  it('should have default input type of text', () => {
    component = shallow(<FormInput labelText="Name:" idCore="name" />);
    expect(component.find('input').props().type).toEqual('text');
  });

  it('should have a placeholder passed by props', () => {
    expect(component.find('input').props().placeholder).toEqual('dave@gmail.com');
  });
});
