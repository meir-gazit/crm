const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Lead API', () => {
  let leadId; // Variable to store the ID of the created lead for later use in other tests

  it('should create a new lead', (done) => {
    const newLead = {
      // Provide data for creating a new lead
      name: 'John Doe',
      email: 'john.doe@example.com',
      // ... other lead properties
    };

    chai
      .request(app)
      .post('/lead')
      .send(newLead)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        leadId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all leads', (done) => {
    chai
      .request(app)
      .get('/lead')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific lead by ID', (done) => {
    chai
      .request(app)
      .get(`/lead/${leadId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(leadId);
        done();
      });
  });

  it('should update a lead', (done) => {
    const updatedLead = {
      // Provide data for updating the lead
      name: 'Updated Name',
      // ... other updated lead properties
    };

    chai
      .request(app)
      .put(`/lead/${leadId}`)
      .send(updatedLead)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a lead', (done) => {
    chai
      .request(app)
      .delete(`/lead/${leadId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
