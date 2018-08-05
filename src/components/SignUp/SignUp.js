import React from 'react';

export default () => (
  <div>
    <h1 className="center">
      Sign Up
    </h1>
    <div className="row">
      <form className="col s6 offset-s3">
        <div
          className="input-field"
          id="name-input-wrapper"
        >
          <label htmlFor="name-input" className="active">
            Name:
          </label>
          <input
            type="text"
            placeholder="Dave"
            name="name"
            id="name-input"
          />
        </div>
      </form>
    </div>
  </div>
);
