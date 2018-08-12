import React, { Component } from 'react';

import FormInput from '../common/FormInput/FormInput';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

class SignUp extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
      name,
      email,
      password,
      passwordConfirm,
    } = this.state;

    return (
      <div>
        <h1 className="center">
          Sign Up
        </h1>
        <div className="row">
          <form className="col s6 offset-s3" onSubmit={this.onSubmit}>
            <FormInput
              idCore="name"
              labelText="Name:"
              placeholder="David"
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
            />

            <FormInput
              idCore="email"
              type="email"
              labelText="Email:"
              placeholder="david@gmail.com"
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
            />

            <FormInput
              idCore="password"
              type="password"
              labelText="Password:"
              placeholder="P@ssw0rd"
              value={password}
              onChange={event => this.setState({ password: event.target.value })}
            />

            <FormInput
              idCore="password-confirm"
              type="password"
              labelText="Confirm Password:"
              placeholder="P@ssw0rd"
              value={passwordConfirm}
              onChange={event => this.setState({ passwordConfirm: event.target.value })}
            />

            <input
              id="submit-button"
              type="submit"
              value="Sign Up"
              className="btn"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
