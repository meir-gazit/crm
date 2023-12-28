const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Contact API', () => {
  let contactId; // Variable to store the ID of the created contact for later use in other tests

  it('should create a new contact', (done) => {
    const newContact = {
      // Provide data for creating a new contact
      name: 'John Doe',
      email: 'john.doe@example.com',
      // ... other contact properties
    };

    chai
      .request(app)
      .post('/contact')
      .send(newContact)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        contactId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all contacts', (done) => {
    chai
      .request(app)
      .get('/contact')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific contact by ID', (done) => {
    chai
      .request(app)
      .get(`/contact/${contactId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(contactId);
        done();
      });
  });

  it('should update a contact', (done) => {
    const updatedContact = {
      // Provide data for updating the contact
      name: 'Updated Name',
      // ... other updated contact properties
    };

    chai
      .request(app)
      .put(`/contact/${contactId}`)
      .send(updatedContact)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a contact', (done) => {
    chai
      .request(app)
      .delete(`/contact/${contactId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
