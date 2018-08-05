/* global describe, it, browser */
/* eslint prefer-destructuring: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const expect = require('chai').expect;

describe('Signup', () => {
  it('Should allow a user to sign up', () => {
    browser.url('http://localhost:3000/');

    const signupButton = browser.element('#signup');
    expect(signupButton.getText()).to.equal('Sign Up');

    signupButton.click();
    expect(browser.getUrl()).to.equal('http://localhost:3000/signup');
  });
});
