/* global describe, it, browser */
/* eslint prefer-destructuring: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const expect = require('chai').expect;

describe('Signup', () => {
  it('Should allow a user to sign up', () => {
    browser.url('http://localhost:3000/');

    const signupButtonText = browser.element('#signup-button').getText();
    expect(signupButtonText).to.equal('Sign Up');
  });
});
