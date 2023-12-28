const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Opportunity API', () => {
  let opportunityId; // Variable to store the ID of the created opportunity for later use in other tests

  it('should create a new opportunity', (done) => {
    const newOpportunity = {
      // Provide data for creating a new opportunity
      name: 'New Business Deal',
      amount: 100000,
      // ... other opportunity properties
    };

    chai
      .request(app)
      .post('/opportunity')
      .send(newOpportunity)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        opportunityId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all opportunities', (done) => {
    chai
      .request(app)
      .get('/opportunity')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific opportunity by ID', (done) => {
    chai
      .request(app)
      .get(`/opportunity/${opportunityId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(opportunityId);
        done();
      });
  });

  it('should update an opportunity', (done) => {
    const updatedOpportunity = {
      // Provide data for updating the opportunity
      name: 'Updated Deal',
      // ... other updated opportunity properties
    };

    chai
      .request(app)
      .put(`/opportunity/${opportunityId}`)
      .send(updatedOpportunity)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete an opportunity', (done) => {
    chai
      .request(app)
      .delete(`/opportunity/${opportunityId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
