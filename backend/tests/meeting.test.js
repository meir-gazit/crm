const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Meeting API', () => {
  let meetingId; // Variable to store the ID of the created meeting for later use in other tests

  it('should create a new meeting', (done) => {
    const newMeeting = {
      // Provide data for creating a new meeting
      title: 'Quarterly Review',
      date: '2023-04-01',
      // ... other meeting properties
    };

    chai
      .request(app)
      .post('/meeting')
      .send(newMeeting)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        meetingId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all meetings', (done) => {
    chai
      .request(app)
      .get('/meeting')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific meeting by ID', (done) => {
    chai
      .request(app)
      .get(`/meeting/${meetingId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(meetingId);
        done();
      });
  });

  it('should update a meeting', (done) => {
    const updatedMeeting = {
      // Provide data for updating the meeting
      title: 'Updated Review',
      // ... other updated meeting properties
    };

    chai
      .request(app)
      .put(`/meeting/${meetingId}`)
      .send(updatedMeeting)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a meeting', (done) => {
    chai
      .request(app)
      .delete(`/meeting/${meetingId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
