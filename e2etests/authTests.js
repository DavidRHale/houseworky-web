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

    const signupHeader = browser.element('h1');
    expect(signupHeader.getText()).to.equal('Sign Up');

    const nameInput = browser.element('#name-input');
    nameInput.setValue('Dave');
    const emailInput = browser.element('#email-input');
    emailInput.setValue('dave@gmail.com');
    const passwordInput = browser.element('#password-input');
    passwordInput.setValue('P@ssword');
    const passwordConfirmInput = browser.element('#password-confirm-input');
    passwordConfirmInput.setValue('P@ssword');

    const submitButton = browser.element('#submit-button');
    submitButton.click();

    expect(browser.getUrl()).to.equal('http://localhost:3000/login');
  });
});
