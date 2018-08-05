/* global describe, it, browser */
/* eslint prefer-destructuring: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const expect = require('chai').expect;

describe('Houseworky App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Houseworky');
  });
});
