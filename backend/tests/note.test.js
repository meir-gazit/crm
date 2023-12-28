const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Note API', () => {
  let noteId; // Variable to store the ID of the created note for later use in other tests

  it('should create a new note', (done) => {
    const newNote = {
      // Provide data for creating a new note
      content: 'This is a test note.',
      // ... other note properties
    };

    chai
      .request(app)
      .post('/note')
      .send(newNote)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        noteId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all notes', (done) => {
    chai
      .request(app)
      .get('/note')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific note by ID', (done) => {
    chai
      .request(app)
      .get(`/note/${noteId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(noteId);
        done();
      });
  });

  it('should update a note', (done) => {
    const updatedNote = {
      // Provide data for updating the note
      content: 'Updated note content.',
      // ... other updated note properties
    };

    chai
      .request(app)
      .put(`/note/${noteId}`)
      .send(updatedNote)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a note', (done) => {
    chai
      .request(app)
      .delete(`/note/${noteId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
