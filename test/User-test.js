import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function () {
    const user = new User()
    expect(user).to.be.an.instanceof(User);
  })



});
