const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('DealStage API', () => {
  let dealStageId; // Variable to store the ID of the created deal stage for later use in other tests

  it('should create a new deal stage', (done) => {
    const newDealStage = {
      // Provide data for creating a new deal stage
      name: 'Prospecting',
      description: 'Identifying potential leads',
      // ... other deal stage properties
    };

    chai
      .request(app)
      .post('/dealStage')
      .send(newDealStage)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        dealStageId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all deal stages', (done) => {
    chai
      .request(app)
      .get('/dealStage')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific deal stage by ID', (done) => {
    chai
      .request(app)
      .get(`/dealStage/${dealStageId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(dealStageId);
        done();
      });
  });

  it('should update a deal stage', (done) => {
    const updatedDealStage = {
      // Provide data for updating the deal stage
      name: 'Updated Stage',
      // ... other updated deal stage properties
    };

    chai
      .request(app)
      .put(`/dealStage/${dealStageId}`)
      .send(updatedDealStage)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a deal stage', (done) => {
    chai
      .request(app)
      .delete(`/dealStage/${dealStageId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
