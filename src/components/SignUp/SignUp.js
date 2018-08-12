import React from 'react';

import FormInput from '../common/FormInput/FormInput';

export default () => (
  <div>
    <h1 className="center">
      Sign Up
    </h1>
    <div className="row">
      <form className="col s6 offset-s3">
        <FormInput
          idCore="name"
          labelText="Name:"
          placeholder="David"
        />

        <FormInput
          idCore="email"
          type="email"
          labelText="Email:"
          placeholder="david@gmail.com"
        />
      </form>
    </div>
  </div>
);
