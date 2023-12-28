const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../your/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API', () => {
  let taskId; // Variable to store the ID of the created task for later use in other tests

  it('should create a new task', (done) => {
    const newTask = {
      // Provide data for creating a new task
      title: 'Complete Project A',
      dueDate: '2023-02-28',
      // ... other task properties
    };

    chai
      .request(app)
      .post('/task')
      .send(newTask)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        taskId = res.body.id; // Save the ID for later use
        done();
      });
  });

  it('should get all tasks', (done) => {
    chai
      .request(app)
      .get('/task')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific task by ID', (done) => {
    chai
      .request(app)
      .get(`/task/${taskId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.equal(taskId);
        done();
      });
  });

  it('should update a task', (done) => {
    const updatedTask = {
      // Provide data for updating the task
      title: 'Updated Project A',
      // ... other updated task properties
    };

    chai
      .request(app)
      .put(`/task/${taskId}`)
      .send(updatedTask)
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Optionally, add more assertions based on your update logic
        done();
      });
  });

  it('should delete a task', (done) => {
    chai
      .request(app)
      .delete(`/task/${taskId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  // Add more test cases as needed for your specific requirements
});
