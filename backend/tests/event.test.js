const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Event API', () => {
  let eventId; // Variable to store the ID of the created event for later use in other tests

  it('should create a new event', (done) => {
    const newEvent = {
      // Provide data for creating a new event
      title: 'Client Meeting',
      date: '2023-01-01',
      // ... other event properties
    };

    chai
      .request(app)
      .post('/event')
      .send(newEvent)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        eventId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all events', (done) => {
    chai
      .request(app)
      .get('/event')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific event by ID', (done) => {
    chai
      .request(app)
      .get(`/event/${eventId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(eventId);
        done();
      });
  });

  it('should update an event', (done) => {
    const updatedEvent = {
      // Provide data for updating the event
      title: 'Updated Meeting',
      // ... other updated event properties
    };

    chai
      .request(app)
      .put(`/event/${eventId}`)
      .send(updatedEvent)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete an event', (done) => {
    chai
      .request(app)
      .delete(`/event/${eventId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
