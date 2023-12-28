// Update the import statements to use ES modules syntax
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../your/app'; // Import your Express app

// Use chai with chai-http
chai.use(chaiHttp);

// Destructure the 'expect' method from the chai module
const { expect } = chai;

// Define the tests using the 'describe' and 'it' functions
describe('User API', () => {
  let userId; // Variable to store the ID of the created user for later use in other tests

  it('should create a new user', (done) => {
    const newUser = {
      // Provide data for creating a new user
      username: 'john_doe',
      email: 'john.doe@example.com',
      password: 'password123',
      // ... other user properties
    };

    chai
      .request(app)
      .post('/user')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        userId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all users', (done) => {
    chai
      .request(app)
      .get('/user')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific user by ID', (done) => {
    chai
      .request(app)
      .get(`/user/${userId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(userId);
        done();
      });
  });

  it('should update a user', (done) => {
    const updatedUser = {
      // Provide data for updating the user
      username: 'updated_john_doe',
      // ... other updated user properties
    };

    chai
      .request(app)
      .put(`/user/${userId}`)
      .send(updatedUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a user', (done) => {
    chai
      .request(app)
      .delete(`/user/${userId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
