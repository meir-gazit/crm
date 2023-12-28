const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app
const User = require('../models/User'); // Import the User model or mock it for testing

chai.use(chaiHttp);
const expect = chai.expect;

describe('Authentication Routes', () => {
  let testUser; // Variable to store the user data for testing

  // Test signup route
  it('should signup a new user', async () => {
    const newUser = {
      username: 'testUser',
      email: 'test@example.com',
      password: 'testPassword',
    };

    const res = await chai.request(app).post('/auth/signup').send(newUser);

    expect(res).to.have.status(201);
    expect(res.body).to.be.an('object');
    expect(res.body.success).to.equal(true);
    expect(res.body.user).to.have.property('username', newUser.username);

    // Save the test user data for later use in login test
    testUser = newUser;
  });

  // Test login route
  it('should login an existing user', async () => {
    const { username, password } = testUser;

    const res = await chai.request(app).post('/auth/login').send({ username, password });

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('token');
  });

  // Add more test cases as needed, such as testing invalid credentials, etc.
});
