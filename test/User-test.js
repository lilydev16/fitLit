import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  let user
  beforeEach(function() {
    user = new User();
  })
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function () {

    expect(user).to.be.an.instanceof(User)
  })
})
